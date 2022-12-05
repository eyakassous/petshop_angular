import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Route, Router } from '@angular/router';
import { Alimentation } from 'src/app/Model/alimentation';
import { ServiceadmnService } from '../ServiceAdmin/serviceadmn.service';

@Component({
  selector: 'app-formalimentation',
  templateUrl: './formalimentation.component.html',
  styleUrls: ['./formalimentation.component.css']
})
export class FormalimentationComponent implements OnInit {
  prodForm!:FormGroup;
  lesalim!:Alimentation[];
  message!: string;
  constructor(private form:FormBuilder,private servadmin:ServiceadmnService,private router:Router) { }

  ngOnInit(): void {
    this.prodForm = this.form.nonNullable.group({
      libelle:['',[Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      prix:[0,[Validators.required, Validators.pattern('^[0-9]+$')]],
      photo:['',Validators.required],
     datefabriquation:['',Validators.required],
      datefin:['',Validators.required],

    })
  }
  Ajouter() {
    this.servadmin.ajouteralim(this.prodForm.value).subscribe(data=>this.lesalim.push(data));
    this.router.navigate(['admin/dashbord/liste']);
    this.message="Ajout fait avec succes";
  }
  isnomPattern(){
    return this.prodForm.controls['libelle'].errors?.['pattern'] &&
    this.prodForm.controls['libelle'].touched;
    }
    isnomrequired(){
      return this.prodForm.controls['libelle'].errors?.['required'] &&
    this.prodForm.controls['libelle'].touched;
    }

    isprixPattern(){
      return this.prodForm.controls['prix'].errors?.['pattern'] &&
      this.prodForm.controls['prix'].touched;
      }
      isprixrequired(){
        return this.prodForm.controls['prix'].errors?.['required'] &&
      this.prodForm.controls['prix'].touched;
      }

      isphotorequired(){
        return this.prodForm.controls['photo'].errors?.['required'] &&
      this.prodForm.controls['photo'].touched;
      }
      isdateFrequired(){
        return this.prodForm.controls['datefin'].errors?.['required'] &&
      this.prodForm.controls['datefin'].touched;
      }

      isdateDrequired(){
        return this.prodForm.controls['datefabriquation'].errors?.['required'] &&
      this.prodForm.controls['datefabriquation'].touched;
      }
      
      

}
