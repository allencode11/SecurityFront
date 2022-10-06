import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesComponent } from './des/des.component';

const routes: Routes = [
  {path: "lab1", component: DesComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
