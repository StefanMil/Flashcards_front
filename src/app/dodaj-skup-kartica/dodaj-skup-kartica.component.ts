import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../shared/models/card.model';
import { DeckOfCards } from '../shared/models/deck-of-cards.model';
import { Subject } from '../shared/models/subject.model';
import { User } from '../shared/models/user.model';
import { KarticaService } from '../shared/services/kartica.service';

@Component({
  selector: 'app-dodaj-skup-kartica',
  templateUrl: './dodaj-skup-kartica.component.html',
  styleUrls: ['./dodaj-skup-kartica.component.scss']
})
export class DodajSkupKarticaComponent implements OnInit {

  public frontText: string = "";
  public backText: string = "";
  public name: string = "";
  public cards: Card[];
  private card: Card;
  private deck: DeckOfCards;
  private id: number;


  constructor(
    private route: ActivatedRoute,
    private karticaService: KarticaService
    ) { }

  ngOnInit(): void {
    this.cards = [];
    this.id = this.route.snapshot.params['id'];
    //TODO zatrazi od backenda predmet zbog naziva predmeta
  }

  public addCard(): void {
    this.card = new Card(this.frontText,this.backText);
    this.cards.push(this.card);
    this.frontText = "";
    this.backText = "";
  }

  public addDeck(): void {
    //TODO: Call service
    this.deck = new DeckOfCards();
    this.deck.Cards = this.cards;
    this.deck.Subject = new Subject();
    this.deck.Subject.SubjectID = this.id;
    this.deck.Name = this.name;
    this.deck.User = new User();
    this.deck.User.Username = localStorage.getItem('username');
    this.deck.Date = new Date();
    this.karticaService.dodajSkupKartica(this.deck)
    console.log(this.deck);
  }

}
