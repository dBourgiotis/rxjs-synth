import { Component, HostListener, OnInit } from '@angular/core'
import { combineLatest, Observable } from 'rxjs'
import { first, map, tap } from 'rxjs/operators'
import { AmplitudeEnvelope, AutoFilter, Distortion, Filter, LFO, OmniOscillator, Oscillator, Synth } from 'tone'
import { StateService } from '../services/state/state.service'
import { SynthState } from '../services/state/synth-state.interface'
import { KeyboardNotes } from './keyboard-notes'

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  state$: Observable<SynthState> = combineLatest([
    this.state.oscType,
    this.state.ampEnvelope,
    this.state.filter,
    this.state.lfo,
    this.state.distortion
  ]).pipe(
    map(([osc_type, amp_env, filter, lfo, distortion]) => ({osc_type, amp_env, filter, lfo, distortion}))
  )

  octave = 4

  constructor(
    private state: StateService
  ) { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  play(event: KeyboardEvent) {
    const note: string = KeyboardNotes()[event.code]
    if (!note) return
    this.state$.pipe(
      tap(state => {
        const synth = new Synth({
          oscillator: {
            type: state.osc_type
          },
          envelope: state.amp_env
        }).toDestination()
        const dist = new Distortion(state.distortion).toDestination()
        const filter = new Filter(state.filter.frequency).toDestination()
        const lfo = new LFO(state.lfo.frequency, state.lfo.min, state.lfo.max).connect(filter.frequency)
        lfo.start()
        synth.connect(dist).connect(filter).triggerAttackRelease(`${note}${this.octave}`, "8n")
      }),
      first(),
    ).subscribe()
  }

  octaveUp() {
    if (this.octave < 6)++this.octave
  }

  octaveDown() {
    if (this.octave > 0) --this.octave
  }

}
