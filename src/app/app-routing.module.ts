import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesComponent } from './des/des.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab3Component } from './lab3/lab3.component';
import { Lab4Component } from './lab4/lab4.component';

const routes: Routes = [
  { path: "des", component: DesComponent, pathMatch: "full" },
  { path: "rsa", component: Lab2Component, pathMatch: "full" },
  { path: "dsa", component: Lab3Component, pathMatch: "full" },
  { path: "com", component: Lab4Component, pathMatch: "full" },
  { path: "", redirectTo: "/des", pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
