import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CetvrtaGodinaComponent } from './cetvrta-godina.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PredmetiTabelaModule } from 'src/app/shared/components/predmeti-tabela/predmeti-tabela.module';



@NgModule({
  declarations: [
    CetvrtaGodinaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PredmetiTabelaModule
  ],
  exports: [
    CetvrtaGodinaComponent
  ]
})
export class CetvrtaGodinaModule { }
