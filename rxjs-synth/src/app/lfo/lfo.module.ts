import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LfoComponent } from './lfo.component';
import {MatSliderModule} from '@angular/material/slider'



@NgModule({
  declarations: [
    LfoComponent
  ],
  exports: [
    LfoComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
  ]
})
export class LfoModule { }
