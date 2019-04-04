import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesheetByDayComponent } from './timesheet-by-day/timesheet-by-day.component';
import { SidebarComponent } from './timesheet-by-day/sidebar/sidebar.component';
import { SidebarItemsComponent } from './timesheet-by-day/sidebar/sidebar-items/sidebar-items.component';
import { SidebarPersonInformationComponent } from './timesheet-by-day/sidebar/sidebar-person-information/sidebar-person-information.component';
import { ContentComponent } from './timesheet-by-day/content/content.component';
import { HeaderComponent } from './timesheet-by-day/header/header.component';
import { ButtonsComponent } from './timesheet-by-day/content/buttons/buttons.component';
import { WorkloadComponent } from './timesheet-by-day/content/workload/workload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './timesheet-by-day/content/table/table.component';
import {
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetByDayComponent,
    SidebarComponent,
    SidebarItemsComponent,
    SidebarPersonInformationComponent,
    ContentComponent,
    HeaderComponent,
    ButtonsComponent,
    WorkloadComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
