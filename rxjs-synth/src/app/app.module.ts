import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AdsrEnvelopeModule } from './adsr-envelope/adsr-envelope.module'

import { AppComponent } from './app.component'
import { FilterModule } from './filter/filter.module'
import { KeyboardModule } from './keyboard/keyboard.module'
import { LfoModule } from './lfo/lfo.module'
import { OscillatorModule } from './oscillator/oscillator.module';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from './effects/effects.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdsrEnvelopeModule,
    FilterModule,
    KeyboardModule,
    LfoModule,
    OscillatorModule,
    BrowserAnimationsModule,
    EffectsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
