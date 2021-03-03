import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredmetComponent } from './predmet.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PredmetComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    PredmetComponent
  ]
})
export class PredmetModule { }
