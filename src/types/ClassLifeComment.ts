import AccountKind from "./AccountKind";

export interface ClassLifeComment {
    id: number;
    idAuteur: number;
    profilAuteur: AccountKind;
    auteur: string;
    date: string;
    message: string;
    supprime: boolean;
}