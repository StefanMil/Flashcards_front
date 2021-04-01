import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  public vratiProfil(username:string): Observable<any> {
    return this.http.get<any>("http://localhost:5000/profil/" + username);
  }

  public izmeniLozinku(user: User) {
    this.http.post<any>("http://localhost:5000/korisnik", user)
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
