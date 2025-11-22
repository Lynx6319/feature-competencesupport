import {ClassLifeComment} from "./ClassLifeComment";
import {ClassLifeFile} from "./ClassLifeFile";

export interface ClassLifeSubject {
    libelle: string;
    id: string;
    idCDT: number;
    dateMiseAJour: string;
    contenu: string;
    commentaires: ClassLifeComment[];
    fichiers: ClassLifeFile[];
}