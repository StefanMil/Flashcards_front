import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PretragaComponent } from './pretraga.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PretragaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    PretragaComponent
  ]
})
export class PretragaModule { }
