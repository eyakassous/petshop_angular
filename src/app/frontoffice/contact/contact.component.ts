import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../modelfront/contact';
import { ContactservService } from '../ServiceFront/contactserv.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message!:String;
  lescontact!:Contact[];
  inscrireForm!:FormGroup;
  constructor( private fb:FormBuilder,private servcont:ContactservService) { }
  lesVilles: string[] = [
    'Tunis', 'Ariana', 'Ben arous' ,'Manouba','Bizerte', 'Sousse', 'Sfax' ,'nabeul' ,'Mahdia' , 'Zaghouan' , 'Beja' ,'Kef' ,'Jendouba' 
    ,' Kasserine' , 'Gabes','Tozeur' ,'Monastir' , 'Kebelli', 'Sidi bouzid' ,'Gafsa','Medenine','Tataouin','Kairouan'];
  ngOnInit(): void {
this.inscrireForm=this.fb. nonNullable.group({
  nom:['',[Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+[" "][A-Z][a-zA-Z]+$')]],
   datedenais: ['',Validators.required],
   tel: ['',Validators.required],
   email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
   sexe:['',Validators.required],
   adresse:['',Validators.required],
   msg:['',Validators.required]
  }) 
}
onReset(){
  this.inscrireForm.reset();
  }
  ajouterctc() {
    this.servcont.ajouterctc(this.inscrireForm.value).subscribe(data=>this.lescontact.push(data));
   this.message="Votre message a éte bien ajouter"
    this.onReset();

  }
  //Validators

  isnomPattern(){
    return this.inscrireForm.controls['nom'].errors?.['pattern'] &&
    this.inscrireForm.controls['nom'].touched;
    }
    isnomrequired(){
      return this.inscrireForm.controls['nom'].errors?.['required'] &&
    this.inscrireForm.controls['nom'].touched;
    }
    isadrsrequired(){
      return this.inscrireForm.controls['adresse'].errors?.['required'] &&
    this.inscrireForm.controls['adresse'].touched;
    }
    isemailrequired(){
      return this.inscrireForm.controls['email'].errors?.['required'] &&
    this.inscrireForm.controls['email'].touched;
    }
    isemailPattern(){
      return this.inscrireForm.controls['email'].errors?.['pattern'] &&
      this.inscrireForm.controls['email'].touched;
      }
      ismsgrequired(){
        return this.inscrireForm.controls['msg'].errors?.['required'] &&
      this.inscrireForm.controls['msg'].touched;
      }
      istelrequired(){
        return this.inscrireForm.controls['tel'].errors?.['required'] &&
      this.inscrireForm.controls['tel'].touched;
      }


}
