export interface ClassLifeFile {
    id: number;
    libelle: string;
    taille: number;
    type: string;
    signatureDemandee: boolean;
    etatSignatures: any[];
    signature: object;
}