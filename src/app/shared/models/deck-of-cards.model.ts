import { Subject } from "./subject.model";
import { User } from "./user.model";

export class DeckOfCards {
    deckOfCardsID: number;
    name: string;
    user: User;
    subject: Subject;
    date: Date;
    likes: number;
    numberOfLikes: number;
}
