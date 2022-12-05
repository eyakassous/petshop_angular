import { Commentaire } from "./commentaire";

export class Accessoire {
    constructor(public id:number,public prix:number,public disponible:boolean,public photo:String,public color:String,public materiel:String,public brand:String,public libelle:String,public dimension:String,public rate:number,public remise:number,public prixnouv:number,public commentaire:Commentaire[]){}
}
