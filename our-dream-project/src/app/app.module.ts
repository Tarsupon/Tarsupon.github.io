import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartsModule} from "ng2-charts";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
} from '@angular/material';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthentificationModule} from "./authentification/authentification.module";
import {RouterModule, Routes} from "@angular/router";
import {ComponentsModule} from "./components/components.module";
import {LayoutModule} from "./layout/layout.module";
import {ViewsModule} from "./views/views.module";
import { PendingApprovalComponent } from './components/pending-approval/pending-approval.component';


const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    PendingApprovalComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    AuthentificationModule,
    ViewsModule,
    RouterModule.forRoot(routes),
    ComponentsModule,
    LayoutModule,
    NgCircleProgressModule.forRoot({
      radius: 18,
      space: -5,
      toFixed: 0,
      outerStrokeWidth: 5,
      outerStrokeColor: "#00C537",
      innerStrokeColor: "#e7e8ea",
      innerStrokeWidth: 5,
      titleColor: "#323C47",
      titleFontSize: "10",
      animation: true,
      animationDuration: 1000,
      showTitle: true,
      showUnits: true,
      showSubtitle: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
