import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  private result: string;

  constructor(private loginService: LoginService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public login():void {
    this.loginService.login(this.username, this.password);
  }

}
