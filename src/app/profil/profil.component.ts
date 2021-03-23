import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  searchBy: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public search(): void {
    this.router.navigateByUrl('/app/pretraga/' + this.searchBy + "/1");
  }

}
