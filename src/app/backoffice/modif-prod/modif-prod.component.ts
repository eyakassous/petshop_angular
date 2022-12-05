import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Accessoire } from 'src/app/Model/accessoire';
import { ServiceadmnService } from '../ServiceAdmin/serviceadmn.service';

@Component({
  selector: 'app-modif-prod',
  templateUrl: './modif-prod.component.html',
  styleUrls: ['./modif-prod.component.css']
})
export class ModifProdComponent implements OnInit {
  prodForm!:FormGroup;
  lesproduits!:Accessoire[];
  activatetRoute: any;
  idProduit: any;
  constructor(private form:FormBuilder,private servadmin:ServiceadmnService) { }

  ngOnInit(): void {
    this.prodForm = this.form.nonNullable.group({
      id:[],
      libelle:[],
      prix:[],
      disponible:false,
      photo:[''],
      color:[''],
      materiel:[''],
      brand:[''],
      dimension:['']
    })
    this.idProduit = this.activatetRoute.snapshot.params['id'];
  }
 // ajouterAcc(){
  //  this.servadmin.update(this.prodForm.value,this.idProduit)
  //.subscribe(data=>this.lesproduits.push(data));
  //  alert("ajout true");
  //}

}
