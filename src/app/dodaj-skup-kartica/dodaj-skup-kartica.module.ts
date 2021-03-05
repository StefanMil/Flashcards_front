import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DodajSkupKarticaComponent } from './dodaj-skup-kartica.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DodajSkupKarticaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    DodajSkupKarticaComponent
  ]
})
export class DodajSkupKarticaModule { }
