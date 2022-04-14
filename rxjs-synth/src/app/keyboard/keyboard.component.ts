import { Component, HostListener, OnInit } from '@angular/core'
import { combineLatest, Observable } from 'rxjs'
import { first, map, tap } from 'rxjs/operators'
import { AmplitudeEnvelope, AutoFilter, Chorus, Distortion, Filter, Freeverb, LFO, OmniOscillator, Oscillator, PingPongDelay, Synth } from 'tone'
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
    this.state.distortion,
    this.state.chorus,
    this.state.delay,
    this.state.reverb,
  ]).pipe(
    map(([osc_type, amp_env, filter, lfo, distortion, chorus, delay, reverb]) => ({
      osc_type, amp_env, filter, lfo, distortion, chorus, delay, reverb
    }) as SynthState)
  )
  synth = new Synth().toDestination()
  dist = new Distortion().toDestination()
  filter = new AutoFilter().toDestination().start()
  reverb = new Freeverb().toDestination()
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
        this.synth.oscillator.type = state.osc_type
        this.synth.envelope.attack = state.amp_env.attack
        this.synth.envelope.decay = state.amp_env.decay
        this.synth.envelope.sustain = state.amp_env.sustain
        this.synth.envelope.release = state.amp_env.release

        this.dist.distortion = state.distortion
        this.filter.baseFrequency = state.filter.frequency
        this.reverb.roomSize.linearRampTo(state.reverb || 0, 0.01)


        this.synth.triggerAttackRelease(`${note}${this.octave}`, "5n").chain(this.dist).chain(this.filter).chain(this.reverb)
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
