import {ClassLifeComment} from "./ClassLifeComment";
import {ClassLifeFile} from "./ClassLifeFile";
import {ClassLifeSubject} from "./ClassLifeSubject";

export interface ClassLife {
    classe: string;
    contenu: string;
    idCDT: number;
    profPrincipal: boolean;
    commentaires: ClassLifeComment[];
    fichiers: ClassLifeFile[];
    matieres: ClassLifeSubject;
}