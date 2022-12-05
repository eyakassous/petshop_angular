import { Animal } from './../../frontoffice/modelfront/animal';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceadmnService } from '../ServiceAdmin/serviceadmn.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-formaanimal',
  templateUrl: './formaanimal.component.html',
  styleUrls: ['./formaanimal.component.css']
})
export class FormaanimalComponent implements OnInit {
  AnimForm!:FormGroup;
  lesanimaux!:Animal[];
  message!: string;
  constructor(private form:FormBuilder,private servadmin:ServiceadmnService,private router:Router) { }

  ngOnInit(): void {
    this.AnimForm = this.form.nonNullable.group({
      id:[0],
      nom:[''],
      photo:[''],
      weight:[0],
      age:[0],
      genre:[''],
      type:[''],
      
    })
  }
  Ajouter() {
    this.servadmin.ajouteranim(this.AnimForm.value).subscribe(anim=>this.lesanimaux.push(anim));
    this.router.navigate(['/admin']);
    this.message="Ajout fait avec succes";
  }
  }


