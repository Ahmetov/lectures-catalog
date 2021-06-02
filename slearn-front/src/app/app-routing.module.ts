import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./security/auth/auth.component";
import {LectureComponent} from "./lecture/lecture.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegistrationComponent} from "./security/registration/registration.component";

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'lectures', component: LectureComponent},
  { path: '**', component: NotFoundComponent}
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
   ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {

}
