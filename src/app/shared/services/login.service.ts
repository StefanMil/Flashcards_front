import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser: any = null;
  error: string = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  
  public login(username: string, password: string): any {
    this.http.post<any>("http://localhost:5000/login", { username: username.toString(), password: password.toString() })
      .subscribe(
        (response) => {
          localStorage.setItem('currentUser', 'true');
          this.router.navigateByUrl('app/pocetna');
          this.currentUser = response;
        },
        (error) => {
          if(error.error.text==='Ne postoji taj username u bazi'){
            console.log('register');
          }
          else if(error.error.text==='Neispravan password'){
            console.log('pogresan password');
          }
        }
      );
      return this.currentUser;
  }

}
