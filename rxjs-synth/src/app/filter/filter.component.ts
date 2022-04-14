import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from '../services/state/state.service';
import { EnvelopeParams, FilterParams } from '../services/state/synth-state.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filter$: Observable<FilterParams> = this.state.filter

  constructor(
    private state: StateService
  ) { }

  ngOnInit(): void {
  }

  setFilter(filter: FilterParams, frequency: number) {
    this.state.setFilter({...filter, frequency})
  }

}
