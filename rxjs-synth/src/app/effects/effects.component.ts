import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from '../services/state/state.service';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss']
})
export class EffectsComponent implements OnInit {
  dist$: Observable<number> = this.state.distortion
  chorus$: Observable<number> = this.state.chorus
  delay$: Observable<number> = this.state.delay
  reverb$: Observable<number> = this.state.reverb

  effects$ = combineLatest([
    this.state.distortion,
    this.state.reverb
  ]).pipe(
    map(([distortion, reverb]) => ({distortion, reverb}))
  )

  constructor(
    private state: StateService,
  ) { }

  ngOnInit(): void {
  }

  setDistortion(value: number) {
    this.state.setDistortion(value)
  }

  setChorus(value: number) {
    this.state.setChorus(value)
  }

  setDelay(value: number) {
    this.state.setDelay(value)
  }

  setReverb(value: number) {
    this.state.setReverb(value)
  }

}
