import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { AmplitudeEnvelope, Distortion, Filter, LFO, OmniOscillator } from 'tone'
import { EnvelopeParams, FilterParams, LFOParams, SynthState } from './synth-state.interface'

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _oscType = new BehaviorSubject<OscillatorType>('sine')
  private _ampEnvelope = new BehaviorSubject<EnvelopeParams>({
    attack: 0.1,
    decay: 0.2,
    sustain: 1.0,
    release: 0.8
  })
  private _distortion = new BehaviorSubject<number>(0.8)
  private _lfo = new BehaviorSubject<LFOParams>({frequency: '4n', min: 400, max: 4000})
  private _filter = new BehaviorSubject<FilterParams>({frequency: 15000, type: 'highpass'})

  constructor() { }

  get oscType() {
    return this._oscType.asObservable()
  }

  get ampEnvelope() {
    return this._ampEnvelope.asObservable()
  }

  get lfo() {
    return this._lfo.asObservable()
  }

  get distortion() {
    return this._distortion.asObservable()
  }

  get filter() {
    return this._filter.asObservable()
  }

  setOscType(type: OscillatorType) {
    this._oscType.next(type)
  }

  setAmpEnvelope(env: EnvelopeParams) {
    return this._ampEnvelope.next(env)
  }

  setLfo(lfo: LFOParams) {
    return this._lfo.next(lfo)
  }

  setDistortion(dist: number) {
    return this._distortion.next(dist)
  }

  setFilter(filter: FilterParams) {
    return this._filter.next(filter)
  }

}
