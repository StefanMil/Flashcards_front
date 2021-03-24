import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent implements OnInit {

  public currentUser: any;

  constructor(private loginService: LoginService) { 
    this.currentUser = this.loginService.currentUser;
  }

  ngOnInit(): void {
    
  }

}
