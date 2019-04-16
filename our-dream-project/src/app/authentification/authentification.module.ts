import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {MatIconModule} from "@angular/material";

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    MatIconModule
  ]
})
export class AuthentificationModule { }
