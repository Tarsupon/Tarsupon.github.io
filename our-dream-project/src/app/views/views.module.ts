import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import { ViewsRoutingModule } from './views-routing.module';
import {EmployeesComponent} from "./employees/employees.component";
import {ComponentsModule} from "../components/components.module";
import {TimesheetsComponent} from "./timesheets/timesheets.component";
import {CompanySettingsComponent} from "./company-settings/company-settings.component";
import {NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    EmployeesComponent,
    TimesheetsComponent,
    CompanySettingsComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ComponentsModule,
    RouterModule,
    NgbProgressbarModule
  ]
})
export class ViewsModule { }
