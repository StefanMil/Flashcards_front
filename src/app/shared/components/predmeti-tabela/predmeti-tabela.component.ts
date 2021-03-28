import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PredmetService } from '../../services/predmet.service';

export interface Predmet {
  id: number;
  predmet: string;
  katedra: string;
  espb: number;
}

@Component({
  selector: 'app-predmeti-tabela',
  templateUrl: './predmeti-tabela.component.html',
  styleUrls: ['./predmeti-tabela.component.scss']
})
export class PredmetiTabelaComponent implements OnInit {

  @Input()
  public smer: String;
  public dataSource:any = null;

  constructor(private predmetService:PredmetService, private router: Router) { }

  ngOnInit(): void {
    if(this.router.url.endsWith('prva-godina')){
      this.vratiPredmetePoGodini(1);
    }
    else if(this.router.url.endsWith('druga-godina')){
      this.vratiPredmetePoGodini(2);
    }
    else if(this.router.url.endsWith('treca-godina')){
      this.vratiPredmetePoGodini(3);
    }
    else if(this.router.url.endsWith('cetvrta-godina')){
      this.vratiPredmetePoGodini(4);
    }
  }

  private vratiPredmetePoGodini(godina: number) {
    if(this.smer==='isit') {
      this.predmetService.vratiPredmete(godina)
      .subscribe(subjects => {
        subjects = subjects.filter(e => e.department != 1);
        this.dataSource = subjects;
      });
    }
    else if(this.smer==='men'){
      this.predmetService.vratiPredmete(godina)
      .subscribe(subjects => {
        subjects = subjects.filter(e => e.department != 0);
        this.dataSource = subjects;
        });
    }
  }

}
