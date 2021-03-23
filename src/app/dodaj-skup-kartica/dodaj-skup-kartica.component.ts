import { Component, Input, OnInit } from '@angular/core';
import { Kartica } from '../shared/models/kartica.model';

@Component({
  selector: 'app-dodaj-skup-kartica',
  templateUrl: './dodaj-skup-kartica.component.html',
  styleUrls: ['./dodaj-skup-kartica.component.scss']
})
export class DodajSkupKarticaComponent implements OnInit {

  public frontText: string = "";
  public backText: string = "";
  public deck: Kartica[];
  private card: Kartica;

  constructor() { }

  ngOnInit(): void {
    this.deck = [];
  }

  public addCard(): void {
    this.card = new Kartica(this.frontText,this.backText);
    this.deck.push(this.card);
    this.frontText = "";
    this.backText = "";
  }

  public addDeck(): void {
    //TODO: Call service
    console.log(this.deck);
  }

}
