import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../services/state/state.service';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss']
})
export class EffectsComponent implements OnInit {
  dist$: Observable<number> = this.state.distortion

  constructor(
    private state: StateService,
  ) { }

  ngOnInit(): void {
  }

  setDistortion(value: number) {
    this.state.setDistortion(value)
  }

}
