import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OscillatorComponent } from './oscillator.component';
import {MatChipsModule} from '@angular/material/chips'


@NgModule({
  declarations: [
    OscillatorComponent
  ],
  exports: [
    OscillatorComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule
  ]
})
export class OscillatorModule { }
