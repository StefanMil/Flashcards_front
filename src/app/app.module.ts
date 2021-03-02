import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { ProfilModule } from './profil/profil.module';
import { PrvaGodinaModule } from './godine/prva-godina/prva-godina.module';
import { PredmetiTabelaComponent } from './shared/components/predmeti-tabela/predmeti-tabela.component';
import { DrugaGodinaModule } from './godine/druga-godina/druga-godina.module';
import { TrecaGodinaModule } from './godine/treca-godina/treca-godina.module';
import { CetvrtaGodinaModule } from './godine/cetvrta-godina/cetvrta-godina.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    ProfilModule,
    PrvaGodinaModule,
    DrugaGodinaModule,
    TrecaGodinaModule,
    CetvrtaGodinaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
