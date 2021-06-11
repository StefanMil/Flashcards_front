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

  public sacuvajKomentar(DeckOfCardsID: number, Text: string) {
    this.http.post<any>("http://localhost:5000/komentar", {User: {Username: localStorage.getItem("username")}, DeckOfCards: {DeckOfCardsID: DeckOfCardsID}, Text: Text})
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public sacuvajPodKomentar(commentId: number, Text: string) {
    this.http.post<any>("http://localhost:5000/podkomentar", {Comment: {CommentId: commentId}, Text: Text, SubCommentedBy: {Username: localStorage.getItem("username")}})
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
