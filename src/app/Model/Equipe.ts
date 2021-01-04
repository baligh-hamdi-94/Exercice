export class Equipe {
    id : number;
    nom : string;
    surnom : string;
    drapeau : string;

    constructor(id = 1, nom = '', surnom = '', drapeau = ''){
        this.id = id;
        this.nom = nom;
        this.surnom = surnom;
        this.drapeau = drapeau
    }
}