import { Commentaire } from "./commentaire";

export class Alimentation {
    constructor(public id:number,public prix:number,public disponible:boolean,public photo:String,public quantite:number,public dateFab:String,public datefin:String,public color:String,public materiel:String,public brand:String,public libelle:String,public dimension:String,public cat:String,public rate:number,public commentaire:Commentaire[]){}
}
