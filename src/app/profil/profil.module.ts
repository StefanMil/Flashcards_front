import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ProfilComponent } from './profil.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PocetnaModule } from '../pocetna/pocetna.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    ProfilComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    FlexLayoutModule,
    PocetnaModule
  ],
  exports: [
    ProfilComponent
  ]
})
export class ProfilModule { }
