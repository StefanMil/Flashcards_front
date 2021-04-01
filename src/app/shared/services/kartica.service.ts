import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeckOfCards } from '../models/deck-of-cards.model';

@Injectable({
  providedIn: 'root'
})
export class KarticaService {

  constructor(private http: HttpClient) { }

  public dodajSkupKartica(deckOfCards: DeckOfCards): any {
    this.http.post<any>("http://localhost:5000/skupkartica", deckOfCards)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
