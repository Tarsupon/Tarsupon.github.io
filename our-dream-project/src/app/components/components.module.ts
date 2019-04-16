import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPickerComponent } from "./calendar-picker/calendar-picker.component";
import { CellComponent} from "./cell/cell.component";
import { ContentComponent} from "./content/content.component";
import {ControlBarComponent} from "./control-bar/control-bar.component";
import {DoughnutChartComponent} from "./doughnut-chart/doughnut-chart.component";
import {NamePhotoComponent} from "./name-photo/name-photo.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PersonalInformationComponent} from "./personal-information/personal-information.component";
import {ProjectNameTagComponent} from "./project-name-tag/project-name-tag.component";
import {ProjectSelectComponent} from "./project-select/project-select.component";
import {RoleSelectComponent} from "./role-select/role-select.component";
import {SelectComponent} from "./select/select.component";
import {StackedDiagramComponent} from "./stacked-diagram/stacked-diagram.component";
import {TableComponent} from "./table/table.component";
import {ThreeBlueButtonsComponent} from "./three-blue-buttons/three-blue-buttons.component";
import {TileComponent} from "./tile/tile.component";
import {TimeInputComponent} from "./time-input/time-input.component";
import {CreateEmployeePageComponent} from "./create-employee-page/create-employee-page.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SidebarItemsComponent} from "./sidebar-items/sidebar-items.component";
import {SidebarPersonInformationComponent} from "./sidebar-person-information/sidebar-person-information.component";
import {HeaderComponent} from "./header/header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {CompanyProjectSettingsComponent} from "./company-project-settings/company-project-settings.component";

@NgModule({
  entryComponents: [
    ProjectSelectComponent,
    RoleSelectComponent,
    TimeInputComponent,
  ],
  declarations: [
    CalendarPickerComponent,
    CellComponent,
    ContentComponent,
    ControlBarComponent,
    DoughnutChartComponent,
    NamePhotoComponent,
    PageNotFoundComponent,
    PersonalInformationComponent,
    ProjectNameTagComponent,
    ProjectSelectComponent,
    RoleSelectComponent,
    SelectComponent,
    StackedDiagramComponent,
    TableComponent,
    ThreeBlueButtonsComponent,
    TileComponent,
    TimeInputComponent,
    CreateEmployeePageComponent,
    SidebarComponent,
    SidebarItemsComponent,
    SidebarPersonInformationComponent,
    HeaderComponent,
    CompanyProjectSettingsComponent,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    ControlBarComponent,
    ThreeBlueButtonsComponent,
    TableComponent,
    DoughnutChartComponent,
    TileComponent,
    CalendarPickerComponent,
    CompanyProjectSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule,

  ]
})
export class ComponentsModule { }
