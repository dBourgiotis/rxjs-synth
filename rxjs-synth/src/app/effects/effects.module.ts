import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsComponent } from './effects.component';
import {MatSliderModule} from '@angular/material/slider'


@NgModule({
  declarations: [
    EffectsComponent
  ],
  exports: [
    EffectsComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
  ]
})
export class EffectsModule { }
