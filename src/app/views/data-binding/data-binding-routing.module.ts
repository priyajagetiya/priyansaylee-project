import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding.component';

const routes: Routes = [
  {
    path: '',
    component: DataBindingComponent
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DataBindingRoutingModule { }
