import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrecaGodinaComponent } from './treca-godina.component';
import { PredmetiTabelaModule } from 'src/app/shared/components/predmeti-tabela/predmeti-tabela.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    TrecaGodinaComponent
  ],
  imports: [
    CommonModule, 
    FlexLayoutModule, 
    PredmetiTabelaModule
  ],
  exports: [
    TrecaGodinaComponent
  ]
})
export class TrecaGodinaModule { }
