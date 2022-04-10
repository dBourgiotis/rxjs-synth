import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OscillatorComponent } from './oscillator.component';



@NgModule({
  declarations: [
    OscillatorComponent
  ],
  exports: [
    OscillatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OscillatorModule { }
