import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material-module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LectureComponent } from './lecture/lecture.component';
import { LectureUpdateComponent } from './lecture/lecture-update/lecture-update.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './security/auth/auth.component';
import { RegistrationComponent } from './security/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import {authInterceptorProvider} from "./helper/auth-interceptor.service";
import {authErrorInterceptorProvider} from "./helper/error-interceptor.service";
import { UserEditComponent } from './user/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LectureComponent,
    LectureUpdateComponent,
    NavigationComponent,
    NotFoundComponent,
    AuthComponent,
    RegistrationComponent,
    UserComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [authInterceptorProvider, authErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
