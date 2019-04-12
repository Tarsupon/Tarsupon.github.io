import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemsComponent } from './sidebar/sidebar-items/sidebar-items.component';
import { SidebarPersonInformationComponent } from './sidebar/sidebar-person-information/sidebar-person-information.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { TableComponent } from './timesheet-by-day/content/table/table.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatIconModule} from '@angular/material/icon';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';
import { TileComponent } from './tile/tile.component';
import { CreateEmployeePageComponent } from './create-employee-page/create-employee-page.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { RoleSelectComponent } from './role-select/role-select.component';
import { EmployeeProjectsComponent } from './employee-projects/employee-projects.component';
import { TableComponent } from './table/table.component';
import { CellComponent } from './cell/cell.component';
import { ProjectSelectComponent } from './project-select/project-select.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentComponent } from './content/content.component';
import { NamePhotoComponent } from './name-photo/name-photo.component';
import { ProjectNameTagComponent } from './project-name-tag/project-name-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemsComponent,
    SidebarPersonInformationComponent,
    HeaderComponent,
    TileComponent,
    CreateEmployeePageComponent,
    PersonalInformationComponent,
    RoleSelectComponent,
    EmployeeProjectsComponent,
    TableComponent,
    CellComponent,
    ProjectSelectComponent,
    TimeInputComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    ContentComponent,
    NamePhotoComponent,
    ProjectNameTagComponent,
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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProjectSelectComponent, RoleSelectComponent, TimeInputComponent]
})
export class AppModule { }
