import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredmetComponent } from './predmet.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    PredmetComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    AppRoutingModule,
  ],
  exports: [
    PredmetComponent
  ]
})
export class PredmetModule { }
