import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { ProfilService } from '../shared/services/profil.service';

export interface Profile{
  Cards_Created: number;
  Comments_Made: number;
  Latest_decks_of_cards: any;
  Likes_Got: number;
  User: {
    Username: string;
    Email: string;
  }
  quiz: any;
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
  public showing: string;
  public question: string;
  public answer: string;
  public showingType: string;

  constructor(private loginService: LoginService,
    private profilService:ProfilService) { 
    this.currentUser = this.loginService.currentUser;
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.profilService.vratiProfil(this.username).subscribe(profil => {
      this.user = profil;
      this.question = this.user?.quiz?.results[0]?.question;
      this.answer = this.user?.quiz?.results[0]?.correct_answer;
      this.showing = this.question;
      this.showingType = "Pitanje";
      console.log(profil);
    });
  }
  
  public showAnswer(): void {
    if(this.showingType=="Pitanje"){
      this.showingType = "Odgovor";
      this.showing = this.answer;
    }
    else {
      this.showingType = "Pitanje";
      this.showing = this.question;
    }
  }

}
