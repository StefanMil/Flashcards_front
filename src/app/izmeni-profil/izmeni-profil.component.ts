import { Component, OnInit } from '@angular/core';
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

  public name: string;
  public user: Profile;

  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
    this.profilService.vratiProfil(localStorage.getItem("username"))
      .subscribe(profil => {
        this.user = profil;
      });
  }

  public izmeniUsername(): void {
    this.profilService.izmeniUsername(localStorage.getItem("username"), this.name);
  }

}
