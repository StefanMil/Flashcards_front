import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DodajSkupKarticaComponent } from './dodaj-skup-kartica/dodaj-skup-kartica.component';
import { CetvrtaGodinaComponent } from './godine/cetvrta-godina/cetvrta-godina.component';
import { DrugaGodinaComponent } from './godine/druga-godina/druga-godina.component';
import { PrvaGodinaComponent } from './godine/prva-godina/prva-godina.component';
import { TrecaGodinaComponent } from './godine/treca-godina/treca-godina.component';
import { IzmeniProfilComponent } from './izmeni-profil/izmeni-profil.component';
import { LoginComponent } from './login/login.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PredmetComponent } from './predmet/predmet.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { PrikazKarticaComponent } from './prikaz-kartica/prikaz-kartica.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'app', component: ProfilComponent, 
    children : [
      { path: 'pocetna', component: PocetnaComponent },
      { path: 'prva-godina', component: PrvaGodinaComponent },
      { path: 'druga-godina', component: DrugaGodinaComponent },
      { path: 'treca-godina', component: TrecaGodinaComponent },
      { path: 'cetvrta-godina', component: CetvrtaGodinaComponent },
      { path: 'cetvrta-godina', component: CetvrtaGodinaComponent },
      { path: 'predmet/:id/:page', component: PredmetComponent },
      { path: 'dodaj-skup-kartica', component: DodajSkupKarticaComponent },
      { path: 'skup-kartica/:id', component: PrikazKarticaComponent },
      { path: 'izmeni-profil', component: IzmeniProfilComponent },
      { path: 'pretraga/:id/:page', component: PretragaComponent },
      { path: '',   redirectTo: 'pocetna', pathMatch: 'full' },
      { path: '**',   redirectTo: 'pocetna', pathMatch: 'full' },
    ]
  },
  { path: '',   redirectTo: 'app', pathMatch: 'full' },
  { path: '**',   redirectTo: 'app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
