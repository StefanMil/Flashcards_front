import { Component, Input, OnInit } from '@angular/core';
import { PredmetService } from 'src/app/services/predmet.service';
import { prvaGodinaIsit, prvaGodinaMen } from '../../mock/MockConstants';

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

  constructor(private predmetService:PredmetService) { }

  ngOnInit(): void {
    if(this.smer==='isit'){
      this.predmetService.vratiPredmeteMOCK(1)
        .subscribe(predmeti => {
          console.log(predmeti);
          this.dataSource = predmeti;
        });
    }
    else if(this.smer==='men'){
      this.dataSource = prvaGodinaMen;
    }
  }

}
