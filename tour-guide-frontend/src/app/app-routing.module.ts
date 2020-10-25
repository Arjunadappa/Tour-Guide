import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent,
    // canActivate: [UserAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [UserAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
