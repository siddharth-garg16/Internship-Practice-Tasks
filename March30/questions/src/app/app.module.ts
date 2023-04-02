import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { QuestionCardComponent } from './questions/question-card/question-card.component';
import { PriceCardComponent } from './custom/price-card/price-card.component';
import { CustomComponent } from './custom/custom.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './Material/material.module';
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    HeaderComponent,
    ErrorComponent,
    QuestionCardComponent,
    PriceCardComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModules,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
