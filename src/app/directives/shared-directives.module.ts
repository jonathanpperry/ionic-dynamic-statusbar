import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicStatusBarDirective } from './dynamic-status-bar.directive';



@NgModule({
  declarations: [
    DynamicStatusBarDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedDirectivesModule { }
