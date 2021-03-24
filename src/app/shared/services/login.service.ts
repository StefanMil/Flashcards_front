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
            this.router.navigateByUrl("/register");
          }
          else if(error.error.text==='Neispravan password'){
            console.log('pogresan password');
          }
        }
      );
      return this.currentUser;
  }

  public register(email:string, username: string, password: string): any {
    this.http.put<any>("http://localhost:5000/register", { email: email.toString(), username: username.toString(), password: password.toString() })
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigateByUrl('app/login');
        },
        (error) => {
          console.log(error.error.text);
          if(error.error.text.startsWith('Ne postoji')){
            console.log("Mejl nije podrzan");
          }
          else if(error.error.text==='Ovaj user je vec registrovan'){
            console.log('pogresan password');
          }
          else if(error.error.text==='Taj username je već zauzet'){
            console.log('pogresan password');
          };
        }
      );
      return this.currentUser;
  }

}
