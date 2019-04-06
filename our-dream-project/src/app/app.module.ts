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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SignInComponent } from './sign-in/sign-in.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChartsModule} from "ng2-charts";
import {
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
} from '@angular/material';
import { ControlBarComponent } from './control-bar/control-bar.component';
import { ThreeBlueButtonsComponent } from './three-blue-buttons/three-blue-buttons.component';
import { CalendarPickerComponent } from './calendar-picker/calendar-picker.component';
import {FormsModule} from "@angular/forms";
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetByDayComponent,
    SidebarComponent,
    SidebarItemsComponent,
    SidebarPersonInformationComponent,
    ContentComponent,
    HeaderComponent,
    ControlBarComponent,
    ThreeBlueButtonsComponent,
    CalendarPickerComponent,
    DoughnutChartComponent,
    SelectComponent,
    // SignInComponent,
    // SignUpComponent,
    // ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
