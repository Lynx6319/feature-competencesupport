import {AccountProfileClass} from "./AccountProfileClass";

export interface AccountProfile {
    classe: AccountProfileClass;
    estApprenant: boolean;
    idEtablissement: string;
    idReelEtab: string;
    infoEDT: string;
    nomEtablissement: string;
    photo: string;
    rneEtablissement: string;
    sexe: string;
    telPortable: string;
}