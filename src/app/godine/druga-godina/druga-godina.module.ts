import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugaGodinaComponent } from './druga-godina.component';
import { PredmetiTabelaModule } from 'src/app/shared/components/predmeti-tabela/predmeti-tabela.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    DrugaGodinaComponent
  ],
  imports: [
    CommonModule,
    PredmetiTabelaModule,
    FlexLayoutModule
  ],
  exports: [
    DrugaGodinaComponent
  ]
})
export class DrugaGodinaModule { }
