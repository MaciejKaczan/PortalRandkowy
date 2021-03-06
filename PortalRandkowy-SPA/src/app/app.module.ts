import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HttpClient } from 'selenium-webdriver/http';
import { Value2Component } from './value2/value2.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      Value2Component
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
