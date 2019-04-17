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

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthentificationModule} from "./authentification/authentification.module";
import {RouterModule, Routes} from "@angular/router";
import {ComponentsModule} from "./components/components.module";
import {LayoutModule} from "./layout/layout.module";
import {ViewsModule} from "./views/views.module";


const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
