import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
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
  selector: 'app-izmeni-profil',
  templateUrl: './izmeni-profil.component.html',
  styleUrls: ['./izmeni-profil.component.scss']
})

export class IzmeniProfilComponent implements OnInit {

  public password: string;
  public oldPassword: string;
  public user: Profile;

  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
    this.profilService.vratiProfil(localStorage.getItem("username"))
      .subscribe(profil => {
        this.user = profil;
      });
  }

  public izmeniLozinku(): void {
    let user: User = new User();
    user.Username = localStorage.getItem("username");
    user.Password = this.oldPassword;
    user.Email = this.password;
    console.log(user);
    
    this.profilService.izmeniLozinku(user);
  }

}
