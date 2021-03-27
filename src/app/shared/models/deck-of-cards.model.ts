import { Card } from "./card.model";
import { Subject } from "./subject.model";
import { User } from "./user.model";

export class DeckOfCards {
    DeckOfCardsID: number;
    Name: string;
    User: User;
    Subject: Subject;
    Date: Date;
    Likes: number;
    NumberOfLikes: number;
    Cards: Card[]
}
