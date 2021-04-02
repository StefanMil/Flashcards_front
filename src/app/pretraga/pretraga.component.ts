import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckOfCards } from '../shared/models/deck-of-cards.model';
import { LikeObj } from '../shared/models/like.model';
import { User } from '../shared/models/user.model';
import { PredmetService } from '../shared/services/predmet.service';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.scss']
})
export class PretragaComponent implements OnInit {

  @Input()
  public searchBy: string = "";
  public page: number;
  public decks: DeckOfCards[];
  public pages: number;

  constructor(private route: ActivatedRoute, 
    private predmetService: PredmetService) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.searchBy = this.route.snapshot.params['id'];
      this.page =  this.route.snapshot.params['page'];
      this.pretraga(this.searchBy, this.page);
    });
  }

  private pretraga(searchBy: string, page: number):void {
    this.predmetService.vratiSkupoveKarticaPretraga(searchBy, page)
    .subscribe(decks => {
      console.log(decks);
        this.pages = decks.Pages;
        this.decks = decks.Decks;
    });
  }

  public prethodnaStrana():void {
    if(this.page>1){
      this.pretraga(this.searchBy, --this.page);
    }
  }

  public sledecaStrana():void {
    if(this.page<200){
      this.pretraga(this.searchBy, ++this.page);
    }
  }

  public like(DeckOfCardsID : number):void{
    let like: LikeObj = new LikeObj();
    like.User = new User();
    like.User.Username = localStorage.getItem("username");
    like.DeckOfCards = new DeckOfCards();
    like.DeckOfCards.DeckOfCardsID = DeckOfCardsID;
    this.predmetService.like(like)
        .subscribe(result => {
          console.log(result);
        });
    location.reload();
  }

  public dislike(DeckOfCardsID : number):void{
    let like: LikeObj = new LikeObj();
    like.User = new User();
    like.User.Username = localStorage.getItem("username");
    like.DeckOfCards = new DeckOfCards();
    like.DeckOfCards.DeckOfCardsID = DeckOfCardsID;
    this.predmetService.dislike(like)
        .subscribe(result => {
          console.log(result);
        });
    location.reload();
  }

}
