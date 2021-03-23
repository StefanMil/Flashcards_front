export class Kartica {
    KarticaID: number;
    SkupKarticaID: number;
    TekstFront: string;
    TekstBack: string;

    constructor(tekstFront: string, tekstBack: string){
        this.TekstFront = tekstFront;
        this.TekstBack = tekstBack;
    }
}
