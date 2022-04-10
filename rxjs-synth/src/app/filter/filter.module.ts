import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FilterComponent } from './filter.component'



@NgModule({
  declarations: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FilterModule { }
