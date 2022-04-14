import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdsrEnvelopeComponent } from './adsr-envelope.component'
import {MatSliderModule} from '@angular/material/slider'


@NgModule({
  declarations: [
    AdsrEnvelopeComponent
  ],
  exports: [
    AdsrEnvelopeComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
  ]
})
export class AdsrEnvelopeModule { }
