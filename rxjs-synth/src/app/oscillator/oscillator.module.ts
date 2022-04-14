import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OscillatorComponent } from './oscillator.component';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    OscillatorComponent
  ],
  exports: [
    OscillatorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class OscillatorModule { }
