import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LikeObj } from '../models/like.model';


@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  constructor(private http: HttpClient) { }

  public vratiPredmete(godina:number): Observable<any> {
    return this.http.get<any>("http://localhost:5000/godina/" + godina);
  }

  public vratiSkupoveKartica(id: number, page:number):Observable<any> {
    let Name: string = localStorage.getItem("username");
    return this.http.get<any>("http://localhost:5000/predmeti/" + id + "/" + page);
  }

  public vratiSkupoveKarticaPretraga(searchBy: string, page:number):Observable<any> {
    return this.http.get<any>("http://localhost:5000/pretraga/" + searchBy + "/" + page);
  }

  public vratiSkupKartica(id: number):Observable<any> {
    return this.http.get<any>("http://localhost:5000/skup-kartica/" + id);
  }

  public like(like: LikeObj):Observable<any> {
    return this.http.post<any>("http://localhost:5000/like/", like);
  }

  public dislike(like: LikeObj):Observable<any> {
    return this.http.delete<any>("http://localhost:5000/like/" + like.DeckOfCards.DeckOfCardsID + "/" + localStorage.getItem("id"));
  }

  public deleteDeck(id:number):Observable<any> {
    return this.http.delete<any>("http://localhost:5000/kartice/" + id);
  }

}
