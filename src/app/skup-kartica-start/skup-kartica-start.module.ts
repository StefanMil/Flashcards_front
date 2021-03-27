import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkupKarticaStartComponent } from './skup-kartica-start.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [SkupKarticaStartComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [SkupKarticaStartComponent]
})
export class SkupKarticaStartModule { }
