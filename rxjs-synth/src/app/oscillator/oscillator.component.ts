import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from '../services/state/state.service';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss']
})
export class OscillatorComponent implements OnInit {
  private types = ():OscillatorType[] => ['triangle', 'sine', 'sawtooth', 'square']
  oscillators$: Observable<{type: OscillatorType, active: boolean}[]> = this.state.oscType.pipe(
    map(osc => this.types().map(type => ({ type, active: type === osc })))
  )

  constructor(
    private state: StateService
  ) { }

  ngOnInit(): void {
  }

  setOsc(type: OscillatorType) {
    this.state.setOscType(type)
  }

}
