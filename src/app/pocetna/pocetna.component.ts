import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { ProfilService } from '../shared/services/profil.service';

export interface Profile{
  Cards_Created: number;
  Comments_Made: number;
  Likes_Got: number;
  User: {
    Username: string;
    Email: string;
  }
}

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent implements OnInit {

  public currentUser: any;
  public username: string;
  public user: Profile;

  constructor(private loginService: LoginService,
    private profilService:ProfilService) { 
    this.currentUser = this.loginService.currentUser;
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.profilService.vratiProfil(this.username).subscribe(profil => {
      this.user = profil;
      console.log(profil);
    });
  }

}
