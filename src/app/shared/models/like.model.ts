import { DeckOfCards } from "./deck-of-cards.model";
import { User } from "./user.model";

export class Like {
    LikeID: number;
    UserID: number;
    DeckOfCardsID: number;
}

export class LikeObj {
    User: User;
    DeckOfCards: DeckOfCards;
}
