import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.scss']
})
export class PretragaComponent implements OnInit {

  @Input()
  searchBy: string = "";

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(queryParams => {
      this.searchBy = queryParams.id;
    });
  }

}
