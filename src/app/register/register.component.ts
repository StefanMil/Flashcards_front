import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public username: string;
  public email: string;
  public password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public register(): void {
    this.loginService.register(this.email, this.username, this.password);
  }

}
