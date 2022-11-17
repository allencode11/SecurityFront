import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesComponent } from './des/des.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab4Component } from './lab4/lab4.component';
import { Lab3Component } from './lab3/lab3.component';

@NgModule({
  declarations: [
    AppComponent,
    DesComponent,
    Lab2Component,
    Lab4Component,
    Lab3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
