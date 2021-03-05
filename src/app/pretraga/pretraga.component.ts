import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.scss']
})
export class PretragaComponent implements OnInit {

  searchBy: string = "";

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.searchBy = this.route.snapshot.paramMap.get('id');
  }

}
