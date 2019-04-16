import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountLayOutComponent} from "./account-lay-out/account-lay-out.component";
import {RouterModule} from "@angular/router";
import {MainLayOutComponent} from "./main-lay-out/main-lay-out.component";
import {ComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [
    AccountLayOutComponent,
    MainLayOutComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ComponentsModule,
  ],
  exports: [
    AccountLayOutComponent,
    MainLayOutComponent,
  ],
})
export class LayoutModule { }
