import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Accessoire } from 'src/app/Model/accessoire';
import { Alimentation } from 'src/app/Model/alimentation';
import { AccessoiresservService } from '../ServiceFront/accessoiresserv.service';
import { AlimentationservService } from '../ServiceFront/alimentationserv.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  commentForm:FormGroup=new FormGroup({
    id:new FormControl('user'),
    titre:new FormControl('titre'),
    Comment:new FormControl('commentaire'),
  })
  Alim!:Alimentation[];
  lesProduits!:Accessoire[];
  constructor(private produitService:AccessoiresservService,private alimService:AlimentationservService) { }
  
  ngOnInit(): void {
    this.produitService.getProduitsnouv().subscribe (data => this.lesProduits = data);
  }
  
    aff:boolean=false;
    onAfficher(){
      this.aff=true;
      var a=this.commentForm.value;
      return a;
    }
    onVider(){
      this.commentForm.reset();
    }

}
