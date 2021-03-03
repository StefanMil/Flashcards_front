import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CetvrtaGodinaComponent } from './godine/cetvrta-godina/cetvrta-godina.component';
import { DrugaGodinaComponent } from './godine/druga-godina/druga-godina.component';
import { PrvaGodinaComponent } from './godine/prva-godina/prva-godina.component';
import { TrecaGodinaComponent } from './godine/treca-godina/treca-godina.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PredmetComponent } from './predmet/predmet.component';

const routes: Routes = [
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'prva-godina', component: PrvaGodinaComponent },
  { path: 'druga-godina', component: DrugaGodinaComponent },
  { path: 'treca-godina', component: TrecaGodinaComponent },
  { path: 'cetvrta-godina', component: CetvrtaGodinaComponent },
  { path: 'cetvrta-godina', component: CetvrtaGodinaComponent },
  { path: 'predmet/:id', component: PredmetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
