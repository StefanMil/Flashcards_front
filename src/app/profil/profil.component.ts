import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  public searchBy: string;
  public currentUser: any;
  public username: string;

  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
    if (!(localStorage.getItem('currentUser')=='true')) {
      this.router.navigateByUrl('login');
    }
    this.currentUser = this.loginService.currentUser;
    this.username = localStorage.getItem('username');
    
  }

  public search(): void {
    this.router.navigateByUrl('/app/pretraga/' + this.searchBy + "/1");
  }

  public logout():void {
    localStorage.setItem('currentUser', 'false');
    this.router.navigateByUrl('login');
  }

}
