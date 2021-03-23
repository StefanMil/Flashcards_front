import { Predmet } from "../components/predmeti-tabela/predmeti-tabela.component";
import { DeckOfCards } from "../models/deck-of-cards.model";

export const prvaGodinaIsit: Predmet[] = [
    {id: 1, predmet: 'Matematika 1', katedra: 'Katedra za matematiku', espb: 5},
    {id: 2, predmet: 'Ekonomija', katedra: 'Katedra za ekonomiju', espb: 5},
    {id: 3, predmet: 'Matematika 2', katedra: 'Katedra za matematiku', espb: 5},
    {id: 4, predmet: 'Menadzment', katedra: 'Katedra za menadzment', espb: 5},
    {id: 5, predmet: 'Osnove informaciono komunikacionih tehnologija', katedra: 'Laboratorija za multimedije', espb: 5},
    {id: 6, predmet: 'Sociologija', katedra: 'Katedra za sociologiju', espb: 5},
    {id: 7, predmet: 'Psihologija', katedra: 'Katedra za psihologiju', espb: 5},
    {id: 8, predmet: 'Strani jezik 1', katedra: 'Katedra za strane jezike', espb: 5},
    {id: 9, predmet: 'Osnovi organizacije', katedra: 'Katedra za organizaciju', espb: 5},
    {id: 10, predmet: 'Proizvodni sistemi', katedra: 'Katedra za upravljanje sistemima', espb: 5},
    {id: 11, predmet: 'Uvod u informacione sisteme', katedra: 'Katedra za informacione sisteme', espb: 5},
    {id: 12, predmet: 'Programiranje 1', katedra: 'Laboratorija za softversko inzenjerstvo', espb: 5},
];

export const prvaGodinaMen: Predmet[] = [
    {id: 1, predmet: 'Matematika 1', katedra: 'Katedra za matematiku', espb: 5},
    {id: 2, predmet: 'Ekonomija', katedra: 'Katedra za ekonomiju', espb: 5},
    {id: 3, predmet: 'Matematika 2', katedra: 'Katedra za matematiku', espb: 5},
    {id: 4, predmet: 'Menadzment', katedra: 'Katedra za menadzment', espb: 5},
    {id: 5, predmet: 'Osnove informaciono komunikacionih tehnologija', katedra: 'Laboratorija za multimedije', espb: 5},
    {id: 6, predmet: 'Sociologija', katedra: 'Katedra za sociologiju', espb: 5},
    {id: 7, predmet: 'Psihologija', katedra: 'Katedra za psihologiju', espb: 5},
    {id: 8, predmet: 'Strani jezik 1', katedra: 'Katedra za strane jezike', espb: 5},
    {id: 9, predmet: 'Osnovi organizacije', katedra: 'Katedra za organizaciju', espb: 5},
    {id: 10, predmet: 'Proizvodni sistemi', katedra: 'Katedra za upravljanje sistemima', espb: 5},
    {id: 11, predmet: 'Uvod u informacione sisteme', katedra: 'Katedra za informacione sisteme', espb: 5},
];

export const skupKarticaBazePodataka: DeckOfCards[] = [
    {deckOfCardsID: 1, name: "SQL Komande", user: {userID: 1, email: "", username: "yoggie",  role: 1}, subject: {subjectID: 1, name: "Baze Podataka", department: 1, semester: 1, year: 1}, date: new Date(), likes: 15, numberOfLikes:15},
    {deckOfCardsID: 2, name: "Eliminaciona pitanja", user: {userID: 1, email: "", username: "nensie", role: 1}, subject: {subjectID: 1, name: "Baze Podataka", department: 1, semester: 1, year: 1}, date: new Date(), likes: 17, numberOfLikes:15},
    {deckOfCardsID: 3, name: "Ispitna Pitanja", user: {userID: 1, email: "", username: "stefon", role: 1}, subject: {subjectID: 1, name: "Baze Podataka", department: 1, semester: 1, year: 1}, date: new Date(), likes: 19, numberOfLikes:15},
    {deckOfCardsID: 1, name: "SQL Komande", user: {userID: 1, email: "", username: "yoggie", role: 1}, subject: {subjectID: 1, name: "Baze Podataka", department: 1, semester: 1, year: 1}, date: new Date(), likes: 15, numberOfLikes:15},
    {deckOfCardsID: 2, name: "Eliminaciona pitanja", user: {userID: 1, email: "", username: "nensie", role: 1}, subject: {subjectID: 1, name: "Baze Podataka", department: 1, semester: 1, year: 1}, date: new Date(), likes: 17, numberOfLikes:15},
    {deckOfCardsID: 1, name: "SQL Komande", user: {userID: 1, email: "", username: "yoggie", role: 1}, subject: {subjectID: 1, name: "Baze Podataka", department: 1, semester: 1, year: 1}, date: new Date(), likes: 15, numberOfLikes:15},
    {deckOfCardsID: 2, name: "Eliminaciona pitanja", user: {userID: 1, email: "", username: "nensie", role: 1}, subject: {subjectID: 1, name: "Baze Podataka", department: 1, semester: 1, year: 1}, date: new Date(), likes: 17, numberOfLikes:15},
    {deckOfCardsID: 1, name: "SQL Komande", user: {userID: 1, email: "", username: "yoggie", role: 1}, subject: {subjectID: 1, name: "Baze Podataka", department: 1, semester: 1, year: 1}, date: new Date(), likes: 15, numberOfLikes:15}
];
