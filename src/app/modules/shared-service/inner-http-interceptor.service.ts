import { Injectable } from '@angular/core';
import { SharedServiceModule } from './shared-service.module';
import { HttpInterceptor, HttpRequest,HttpEvent, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn:SharedServiceModule
})
export class InnerHttpInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    console.log('HttpInterceptor Request : '+ req);
     let httpHeader = req.headers;
     httpHeader = httpHeader.append('content-type','application/json');
     const clonedReq = req.clone({headers: httpHeader});
     return next.handle(clonedReq)
      .pipe(
        map(response=>{
          if(response instanceof HttpResponse)
          {
            console.log('HttpInterceptor Response : '+response);
            return response;
          }
        })
      );

    //   console.log('INTERCEPTOR');
    // let newHeaders = req.headers;
    //   newHeaders = newHeaders.append('xsrfcontent', 'some gibberish value');
    // const authReq = req.clone({headers: newHeaders});
    //  return next.handle(authReq);
     //.pipe(
    //   map(resp => {
    //     if (resp instanceof HttpResponse) {
    //       console.log(resp);
    //       return  resp.clone({ body: [{title: 'Replaced data in interceptor'}] });
    //     }
    //   })
    // );

  }
}