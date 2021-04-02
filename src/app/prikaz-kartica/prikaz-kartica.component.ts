import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../shared/models/card.model';
import { KarticaService } from '../shared/services/kartica.service';
import { PredmetService } from '../shared/services/predmet.service';

export interface DialogData {
  DeckOfCardsID: number;
  subComment: boolean;
  commentId: number;
}

@Component({
  selector: 'app-prikaz-kartica',
  templateUrl: './prikaz-kartica.component.html',
  styleUrls: ['./prikaz-kartica.component.scss']
})
export class PrikazKarticaComponent implements OnInit {

  public deckOfCards: any;
  public currentCardId: number;
  public currentCard: any;
  public deckLength: number;
  public flipped: boolean;

  constructor(private route: ActivatedRoute,
    private predmetService: PredmetService,
    public dialog: MatDialog) {
      this.predmetService.vratiSkupKartica(this.route.snapshot.params['id'])
    .subscribe(skupKartica => {
      console.log(skupKartica);
      this.deckOfCards = skupKartica;
      this.deckLength = skupKartica.cards.length;
      this.currentCardId = 0;
      console.log(this.deckOfCards?.cards[0]);
      this.currentCard = this.deckOfCards?.cards[this.currentCardId];
    });
  }

  ngOnInit(): void {
  }

  openDialog(subComment: boolean, commentId: number): void {
    const dialogRef = this.dialog.open(CommentDialog, {
      width: '300px',
      data: {DeckOfCardsID: this.deckOfCards.deckOfCardsID, subComment: subComment, commentId: commentId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public moveRight() {
    if(this.currentCardId<this.deckLength-1){
      this.currentCardId++;
      this.currentCard = this.deckOfCards.cards[this.currentCardId];
      this.flipped=false;
    }
  }

  public moveLeft() {
    if(this.currentCardId>0){
      this.currentCardId--;
      this.currentCard = this.deckOfCards.cards[this.currentCardId];
      this.flipped=false;
    }
  }

  public flip() {
    this.flipped = !this.flipped;
  }

}

@Component({
  selector: 'comment-dialog',
  templateUrl: 'comment-dialog.html',
})
export class CommentDialog {

  public input: string;

  constructor(
    private karticaService: KarticaService,
    public dialogRef: MatDialogRef<CommentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  sacuvajKomentar(): void {
    if(this.data.subComment===true){
      this.karticaService.sacuvajPodKomentar(this.data.commentId, this.input);
    }
    else {
      this.karticaService.sacuvajKomentar(this.data.DeckOfCardsID, this.input);
    }
  }

}
