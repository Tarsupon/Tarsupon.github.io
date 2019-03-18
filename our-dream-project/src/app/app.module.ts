import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyFieldComponent } from './company-field/company-field.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { CompanyIntegrationsComponent } from './company-integrations/company-integrations.component';
import { CompanyIntegrationsLinksComponent } from './company-integrations-links/company-integrations-links.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyFieldComponent,
    CompanySettingsComponent,
    CompanyIntegrationsComponent,
    CompanyIntegrationsLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
