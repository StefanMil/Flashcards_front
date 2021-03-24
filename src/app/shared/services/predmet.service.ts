import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { prvaGodinaIsit } from '../mock/MockConstants';


@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  constructor(private http: HttpClient) { }

  public vratiPredmeteMOCK(godina:number): Observable<any> {
    return of(prvaGodinaIsit);
  }

  public vratiPredmete(godina:number): Observable<any> {
    return this.http.get<any>("http://localhost:5000/godina/" + godina);
  }

  public vratiSkupoveKartica(id: number, page:number):Observable<any> {
    return this.http.get<any>("http://localhost:5000/predmeti/" + id + "/" + page);
  }

  public vratiSkupoveKarticaPretraga(searchBy: string, page:number):Observable<any> {
    return this.http.get<any>("http://localhost:5000/pretraga/" + searchBy + "/" + page);
  }

  public vratiSkupKartica(id: number):Observable<any> {
    return this.http.get<any>("http://localhost:5000/skup-kartica/" + id);
  }

}
