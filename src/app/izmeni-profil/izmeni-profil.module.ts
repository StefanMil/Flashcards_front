import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IzmeniProfilComponent } from './izmeni-profil.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    IzmeniProfilComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    IzmeniProfilComponent
  ]
})
export class IzmeniProfilModule { }
