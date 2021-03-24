import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../shared/models/card.model';

@Component({
  selector: 'app-dodaj-skup-kartica',
  templateUrl: './dodaj-skup-kartica.component.html',
  styleUrls: ['./dodaj-skup-kartica.component.scss']
})
export class DodajSkupKarticaComponent implements OnInit {

  public frontText: string = "";
  public backText: string = "";
  public deck: Card[];
  private card: Card;

  constructor() { }

  ngOnInit(): void {
    this.deck = [];
  }

  public addCard(): void {
    this.card = new Card(this.frontText,this.backText);
    this.deck.push(this.card);
    this.frontText = "";
    this.backText = "";
  }

  public addDeck(): void {
    //TODO: Call service
    console.log(this.deck);
  }

}
