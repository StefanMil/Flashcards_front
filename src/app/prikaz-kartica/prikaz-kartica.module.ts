import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrikazKarticaComponent } from './prikaz-kartica.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PrikazKarticaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    PrikazKarticaComponent
  ]
})
export class PrikazKarticaModule { }
