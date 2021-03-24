import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckOfCards } from '../shared/models/deck-of-cards.model';
import { PredmetService } from '../shared/services/predmet.service';

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

  constructor(private route: ActivatedRoute,
    private predmetService: PredmetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.page =  this.route.snapshot.params['page'];
    //TODO: Call service
    this.predmetService.vratiSkupoveKartica(this.id, this.page)
        .subscribe(skupoviKartica => {
          console.log(skupoviKartica);
          this.decks = skupoviKartica.Decks;
          this.subject = this.decks[0].Subject.Name;
        });
  }

  public prethodnaStrana():void {
    if(this.page>1){
    this.predmetService.vratiSkupoveKartica(this.id, --this.page)
        .subscribe(skupoviKartica => {
          console.log(skupoviKartica);
          this.decks = skupoviKartica.Decks;
          this.subject = this.decks[0].Subject.Name;
        });
    }
  }

  public sledecaStrana():void {
    this.predmetService.vratiSkupoveKartica(this.id, ++this.page)
        .subscribe(skupoviKartica => {
          console.log(skupoviKartica);
          this.decks = skupoviKartica.Decks;
          this.subject = this.decks[0].Subject.Name;
        });
  }

}
