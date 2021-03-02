import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrvaGodinaComponent } from './prva-godina.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PredmetiTabelaModule } from 'src/app/shared/components/predmeti-tabela/predmeti-tabela.module';

@NgModule({
  declarations: [
    PrvaGodinaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PredmetiTabelaModule
  ],
  exports: [
    PrvaGodinaComponent
  ]
})
export class PrvaGodinaModule { }
