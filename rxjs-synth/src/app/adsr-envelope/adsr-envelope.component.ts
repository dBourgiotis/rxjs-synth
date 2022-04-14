import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from '../services/state/state.service';
import { EnvelopeParams } from '../services/state/synth-state.interface';

@Component({
  selector: 'app-adsr-envelope',
  templateUrl: './adsr-envelope.component.html',
  styleUrls: ['./adsr-envelope.component.scss']
})
export class AdsrEnvelopeComponent implements OnInit {
  adsr$: Observable<EnvelopeParams> = this.state.ampEnvelope

  constructor(
    private state: StateService
  ) { }

  ngOnInit(): void {
  }

  setAsdr(env: EnvelopeParams, value: number, key: string) {
    this.state.setAmpEnvelope({...env, [key]: value})
  }

}
