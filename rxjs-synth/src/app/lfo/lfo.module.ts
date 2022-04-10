import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LfoComponent } from './lfo.component';



@NgModule({
  declarations: [
    LfoComponent
  ],
  exports: [
    LfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LfoModule { }
