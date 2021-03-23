import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PredmetService } from '../services/predmet.service';
import { skupKarticaBazePodataka } from '../shared/mock/MockConstants';
import { DeckOfCards } from '../shared/models/deck-of-cards.model';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.scss']
})
export class PredmetComponent implements OnInit {
  public id: number;
  public decks: DeckOfCards[];
  public page: number;
  public subject: string = 'undefined';

  constructor(private route: ActivatedRoute,private predmetService: PredmetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.page =  this.route.snapshot.params['page'];
    //TODO: Call service
    this.predmetService.vratiSkupoveKartica(this.id, this.page)
        .subscribe(skupoviKartica => {
          console.log(skupoviKartica);
          this.decks = skupoviKartica;
          this.subject = this.decks[0].subject.name;
        });
  }

  public prethodnaStrana():void {
    if(this.page>1){
    this.predmetService.vratiSkupoveKartica(this.id, --this.page)
        .subscribe(skupoviKartica => {
          console.log(skupoviKartica);
          this.decks = skupoviKartica;
          this.subject = this.decks[0].subject.name;
        });
    }
  }

  public sledecaStrana():void {
    this.predmetService.vratiSkupoveKartica(this.id, ++this.page)
        .subscribe(skupoviKartica => {
          console.log(skupoviKartica);
          this.decks = skupoviKartica;
          this.subject = this.decks[0].subject.name;
        });
  }

}
