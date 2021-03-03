import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredmetiTabelaComponent } from './predmeti-tabela.component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    PredmetiTabelaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FlexLayoutModule, 
    AppRoutingModule
  ],
  exports: [
    PredmetiTabelaComponent
  ]
})
export class PredmetiTabelaModule { }
