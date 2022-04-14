import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FilterComponent } from './filter.component'
import {MatSliderModule} from '@angular/material/slider'



@NgModule({
  declarations: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
  ]
})
export class FilterModule { }
