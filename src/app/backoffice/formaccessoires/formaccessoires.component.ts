import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Accessoire } from 'src/app/Model/accessoire';
import { ServiceadmnService } from '../ServiceAdmin/serviceadmn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formaccessoires',
  templateUrl: './formaccessoires.component.html',
  styleUrls: ['./formaccessoires.component.css']
})
export class FormaccessoiresComponent implements OnInit {
  prodForm!:FormGroup;
  lesproduits!:Accessoire[];
  message!:String;
  constructor(private form:FormBuilder,private servadmin:ServiceadmnService,private router:Router) { }

  ngOnInit(): void { 
    this.prodForm = this.form.nonNullable.group({
      libelle:['',[Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      prix:[0,[Validators.required, Validators.pattern('^[0-9]+$')]],
      photo:['',Validators.required],
      color:['',[Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      materiel:['',[Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      brand:['',[Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      dimension:['',Validators.required]
    })
  }
  Ajouter() {
    this.servadmin.ajouteracces(this.prodForm.value).subscribe(data=>this.lesproduits.push(data));
    this.router.navigate(['admin/dashbord/liste']);
    this.message="Ajout fait avec succes";
  }

  //Validators

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

      iscouleurPattern(){
        return this.prodForm.controls['color'].errors?.['pattern'] &&
        this.prodForm.controls['color'].touched;
        }
        iscouleurrequired(){
          return this.prodForm.controls['color'].errors?.['required'] &&
        this.prodForm.controls['color'].touched;
        }
        ismatPattern(){
          return this.prodForm.controls['materiel'].errors?.['pattern'] &&
          this.prodForm.controls['materiel'].touched;
          }
          ismatrequired(){
            return this.prodForm.controls['materiel'].errors?.['required'] &&
          this.prodForm.controls['materiel'].touched;
          }
          isbrandPattern(){
            return this.prodForm.controls['brand'].errors?.['pattern'] &&
            this.prodForm.controls['brand'].touched;
            }
            isbrandrequired(){
              return this.prodForm.controls['brand'].errors?.['required'] &&
            this.prodForm.controls['brand'].touched;
            }
            
            isphotorequired(){
              return this.prodForm.controls['photo'].errors?.['required'] &&
            this.prodForm.controls['photo'].touched;
            }
            
            isdimensionrequired(){
              return this.prodForm.controls['dimension'].errors?.['required'] &&
            this.prodForm.controls['dimension'].touched;
            }
            
}

