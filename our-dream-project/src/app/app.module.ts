import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemsComponent } from './sidebar-items/sidebar-items.component';
import { SidebarPersonInformationComponent } from './sidebar-person-information/sidebar-person-information.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
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
import { StackedDiagramComponent } from './stacked-diagram/stacked-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemsComponent,
    SidebarPersonInformationComponent,
    HeaderComponent,
    ControlBarComponent,
    ThreeBlueButtonsComponent,
    CalendarPickerComponent,
    DoughnutChartComponent,
    SelectComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    StackedDiagramComponent,
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
