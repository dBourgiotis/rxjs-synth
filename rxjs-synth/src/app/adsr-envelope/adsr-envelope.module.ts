import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdsrEnvelopeComponent } from './adsr-envelope.component'



@NgModule({
  declarations: [
    AdsrEnvelopeComponent
  ],
  exports: [
    AdsrEnvelopeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdsrEnvelopeModule { }
