import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginComponent} from "./login/login.component";
import {OverviewComponent} from "./overview/overview.component";
import {ExploreComponent} from "./explore/explore.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    // canActivate: [UserAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [UserAuthGuard]
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
