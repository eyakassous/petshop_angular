import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Accessoire } from 'src/app/Model/accessoire';
import { Commentaire } from 'src/app/Model/commentaire';
import { AccessoiresservService } from '../ServiceFront/accessoiresserv.service';

@Component({
  selector: 'app-selectedacess',
  templateUrl: './selectedacess.component.html',
  styleUrls: ['./selectedacess.component.css']
})
export class SelectedacessComponent implements OnInit {
  message!:String;
  idProduit!:number; 
produit!:Accessoire;
acessForm!:FormGroup;
lesEmployes!:Accessoire[];
  constructor(private activatetRoute:ActivatedRoute,private produitservService:AccessoiresservService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.idProduit = this.activatetRoute.snapshot.params['id'];
    this.produitservService.getProduitsById(this.idProduit).subscribe((data) => (this.produit = data));
    this.produitservService.getProduitsnouvById(this.idProduit).subscribe((data) => (this.produit = data));
    this.createForm();
  }
  get lescommentaires(){
    return this.acessForm.get('commentaire') as FormArray;
  }
  createForm(){
    this.acessForm = this.fb.nonNullable.group({
      commentaire:this.fb.array([])
    })
  }
  ajouterDiplome(){
    this.lescommentaires.push(this.fb.nonNullable.group({
      email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      message:['',Validators.required]
    }))
  }

  //Validators
  isemailrequired(){
    return this.acessForm.controls['email'].errors?.['required'] &&
    this.acessForm.controls['email'].touched;
  }
  isemailPattern(){
    return this.acessForm.controls['email'].errors?.['pattern'] &&
    this.acessForm.controls['email'].touched;
    }
    ismsgrequired(){
      return this.acessForm.controls['message'].errors?.['required'] &&
    this.acessForm.controls['message'].touched;
    }
  ajouterAcc(){
    this.produitservService.ajoutercomment(this.acessForm.value, this.idProduit).subscribe(data=>this.lescommentaires.push(data));
    this.message="Votre commentaire a été bien enregistrer!!"
  }


}
