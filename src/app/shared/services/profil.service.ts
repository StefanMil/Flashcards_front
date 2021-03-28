import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  public vratiProfil(username:string): Observable<any> {
    return this.http.get<any>("http://localhost:5000/profil/" + username);
  }

  public izmeniUsername(oldUsername: string, oldEmail: string) {

  }
}
