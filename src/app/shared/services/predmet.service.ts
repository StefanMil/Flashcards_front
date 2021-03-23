import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { prvaGodinaIsit } from '../mock/MockConstants';


@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  constructor(private http: HttpClient) { }

  vratiPredmeteMOCK(godina:number): Observable<any> {
    return of(prvaGodinaIsit);
  }

  vratiPredmete(godina:number): Observable<any> {
    return this.http.get<any>("http://localhost:5000/godina/" + godina);
  }

  vratiSkupoveKartica(id: number, page:number):Observable<any> {
    return this.http.get<any>("http://localhost:5000/predmeti/" + id + "/" + page);
  }

  vratiSkupoveKarticaPretraga(searchBy: string, page:number):Observable<any> {
    return this.http.get<any>("http://localhost:5000/pretraga/" + searchBy + "/" + page);
  }

  vratiSkupKartica(id: number):Observable<any> {
    return this.http.get<any>("http://localhost:5000/skup-kartica/" + id);
  }

}
