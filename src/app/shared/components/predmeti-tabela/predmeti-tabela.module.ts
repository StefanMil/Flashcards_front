import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredmetiTabelaComponent } from './predmeti-tabela.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PredmetiTabelaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    PredmetiTabelaComponent
  ]
})
export class PredmetiTabelaModule { }
