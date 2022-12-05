import { Component, OnInit } from '@angular/core';
import { Accessoire } from 'src/app/Model/accessoire';
import { Alimentation } from 'src/app/Model/alimentation';
import { ServiceadmnService } from '../ServiceAdmin/serviceadmn.service';

@Component({
  selector: 'app-listeproduits',
  templateUrl: './listeproduits.component.html',
  styleUrls: ['./listeproduits.component.css']
})
export class ListeproduitsComponent implements OnInit {
  lesproduits!:Accessoire[];
  lesalim!:Alimentation[];
  produitradiobutton: string='';
  searchText: string = '';
  constructor(private servadmin:ServiceadmnService) { }

  ngOnInit(): void { 
    this.servadmin.getProduits().subscribe (data => this.lesproduits = data)
    this.servadmin.getAlimentation().subscribe (data => this.lesalim = data)
  }
  supprimer(produit: Accessoire) {
    this.servadmin
      .supprimeracess(produit.id) 
      .subscribe(
        (data) => (this.lesproduits = this.lesproduits.filter((e) => e.id != produit.id))
      );
  }
  supprimeralim(alim: Alimentation) {
    this.servadmin.supprimerAlim(alim.id)
      .subscribe(
        (data) => (this.lesalim = this.lesalim.filter((e) => e.id != alim.id))
      );
  }
   
   /* Ajouter() {
      this.produitservice.ajouteracces(this.prodForm.value).subscribe(data=>this.lesproduits.push(data));
      this.onReset();
    }*/
    onSearchTextentered(searchvalue: string){
      this.searchText=searchvalue;
      //console.log(this.searchText);
    }}

