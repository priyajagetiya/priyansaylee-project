import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { DataBindingRoutingModule } from './data-binding-routing.module';

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule
  ]
})
export class DataBindingModule { }
