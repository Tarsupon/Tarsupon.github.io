import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesheetByDayComponent } from './timesheet-by-day/timesheet-by-day.component';
import { TimesheetPeriodsComponent } from './timesheet-periods/timesheet-periods.component';
import { TimesheetTableComponent } from './timesheet-table/timesheet-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetByDayComponent,
    TimesheetPeriodsComponent,
    TimesheetTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
