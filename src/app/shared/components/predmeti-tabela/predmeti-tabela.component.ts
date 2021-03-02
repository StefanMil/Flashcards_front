import { Component, Input, OnInit } from '@angular/core';
import { prvaGodinaIsit, prvaGodinaMen } from '../../mock/MockConstants';

export interface Predmet {
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

  constructor() { }

  ngOnInit(): void {
    if(this.smer==='isit'){
      this.dataSource = prvaGodinaIsit;
    }
    else if(this.smer==='men'){
      this.dataSource = prvaGodinaMen;
    }
  }

}
