import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { KeyboardComponent } from './keyboard.component'



@NgModule({
  declarations: [
    KeyboardComponent
  ],
  exports: [
    KeyboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KeyboardModule { }
