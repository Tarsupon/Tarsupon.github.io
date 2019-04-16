import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayOutComponent} from "../layout/main-lay-out/main-lay-out.component";
import {EmployeesComponent} from "./employees/employees.component";
import {TimesheetsComponent} from "./timesheets/timesheets.component";
import {PageNotFoundComponent} from "../components/page-not-found/page-not-found.component";
import {CompanySettingsComponent} from "./company-settings/company-settings.component";

const routes: Routes = [
  {
    path: 'company_settings',
    component: MainLayOutComponent,
    children:[
      {
        path: '',
        component: CompanySettingsComponent,
      }
    ]
  },
  {
    path: 'employees',
    component: MainLayOutComponent,
    children: [
      {
        path: '',
        component: EmployeesComponent,
       }
    ]
  },
  {
    path: 'timesheets',
    component: MainLayOutComponent,
    children:[
      {
        path: '',
        component: TimesheetsComponent,
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
