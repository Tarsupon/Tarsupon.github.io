import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountLayOutComponent} from "../layout/account-lay-out/account-lay-out.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";

const routes: Routes = [
  {
    path: 'sign_up',
    component: AccountLayOutComponent,
    children: [
      { path: '', component: SignUpComponent}
    ]
  },
  {
    path: 'forgot_password',
    component: AccountLayOutComponent,
    children: [
      { path: '', component:ForgotPasswordComponent}
    ]
  },
  {
    path: '',
    component: AccountLayOutComponent,
    children: [
      { path: '', component:SignInComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
