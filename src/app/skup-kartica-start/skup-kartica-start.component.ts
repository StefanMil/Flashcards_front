import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/card.model';

@Component({
  selector: 'app-skup-kartica-start',
  templateUrl: './skup-kartica-start.component.html',
  styleUrls: ['./skup-kartica-start.component.scss']
})
export class SkupKarticaStartComponent implements OnInit {

  public cards: Card[];

  constructor() { }

  ngOnInit(): void {
    this.cards = [{CardID: 1,TextFront:"SELECT",TextBack:"yes",DeckOfCardsID:1}, {CardID: 2,TextFront:"UPDATE",TextBack:"yes",DeckOfCardsID:1}];
  }

}
