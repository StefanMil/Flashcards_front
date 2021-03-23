import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PredmetService } from '../shared/services/predmet.service';

@Component({
  selector: 'app-prikaz-kartica',
  templateUrl: './prikaz-kartica.component.html',
  styleUrls: ['./prikaz-kartica.component.scss']
})
export class PrikazKarticaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private predmetService: PredmetService) { }

  ngOnInit(): void {
    this.predmetService.vratiSkupKartica(this.route.snapshot.params['id'])
    .subscribe(skupKartica => {
      console.log(skupKartica);
    });
  }

}
