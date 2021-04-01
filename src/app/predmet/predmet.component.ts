import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckOfCards } from '../shared/models/deck-of-cards.model';
import { LikeObj } from '../shared/models/like.model';
import { Subject } from '../shared/models/subject.model';
import { User } from '../shared/models/user.model';
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
  public pages: number;
  public subjectName: string = 'undefined';
  public subject: Subject = new Subject();

  constructor(private route: ActivatedRoute,
    private predmetService: PredmetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.page =  this.route.snapshot.params['page'];
    //TODO: Call service
    this.predmetService.vratiSkupoveKartica(this.id, this.page)
        .subscribe(skupoviKartica => {
          console.log(skupoviKartica);
          this.pages = skupoviKartica.Pages;
          this.decks = skupoviKartica.Decks;
          this.subjectName = skupoviKartica.Subject;
        });
  }

  public prethodnaStrana():void {
    if(this.page>1){
      this.predmetService.vratiSkupoveKartica(this.id, --this.page)
          .subscribe(skupoviKartica => {
            this.decks = skupoviKartica.Decks;
            this.subjectName = this.decks[0].Subject.Name;
          });
    }
  }

  public sledecaStrana():void {
    if(this.page<this.pages){
      this.predmetService.vratiSkupoveKartica(this.id, ++this.page)
          .subscribe(skupoviKartica => {
            this.decks = skupoviKartica.Decks;
            this.subjectName = this.decks[0].Subject.Name;
          });
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
  }

  public dislike(DeckOfCardsID : number):void{
    
  }
}
