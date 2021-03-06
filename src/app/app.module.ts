import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StandardFormComponent } from './standard-form/standard-form.component';
import * as fromDirectives from './directives';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import * as fromBlogComponents from './blog';
import { SharedServiceModule } from './modules/shared-service/shared-service.module';
import { ConfirmationDialogService } from './services/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogReferenceService } from './services/confirmation-dialog-reference.service';
import { ErrorDirective } from './directives/error.directive';
import * as fromPipes from './pipes';
import { DirtyCheckGuard } from './modules/shared-service/dirty-check.guard';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedServiceModule.forRoot()],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    StandardFormComponent, 
    ReactiveFormComponent,
    ...fromDirectives.directives, 
    ...fromPipes.pipes
  ],
  entryComponents:[ ConfirmationDialogComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConfirmationDialogService, ConfirmationDialogReferenceService,DirtyCheckGuard]
})
export class AppModule { }
