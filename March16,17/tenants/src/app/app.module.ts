import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnectorComponent } from './connector/connector.component';

import { MaterialModules } from './Material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { DummyConnectorComponent } from './dummy-connector/dummy-connector.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectorComponent,
    DummyConnectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
