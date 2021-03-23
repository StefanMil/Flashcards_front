import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IzmeniProfilComponent } from './izmeni-profil.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    IzmeniProfilComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    IzmeniProfilComponent
  ]
})
export class IzmeniProfilModule { }
