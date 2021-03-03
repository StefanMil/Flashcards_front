import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Kartica {
  id: number;
  naziv: string;
  opis: string;
  brojKartica: number;
  korisnik: string;
}

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.scss']
})
export class PredmetComponent implements OnInit {
  id:number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //TODO: Connect with API service
  }

}
