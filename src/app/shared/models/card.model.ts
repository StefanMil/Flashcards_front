export class Card {
    CardID: number;
    DeckOfCardsID: number;
    TextFront: string;
    TextBack: string;

    constructor(tekstFront: string, tekstBack: string){
        this.TextFront = tekstFront;
        this.TextBack = tekstBack;
    }
}
