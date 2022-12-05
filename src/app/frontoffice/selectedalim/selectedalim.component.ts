import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Alimentation } from 'src/app/Model/alimentation';
import { AlimentationservService } from '../ServiceFront/alimentationserv.service';

@Component({
  selector: 'app-selectedalim',
  templateUrl: './selectedalim.component.html',
  styleUrls: ['./selectedalim.component.css']
})
export class SelectedalimComponent implements OnInit {
  idAlim!:number;
  alimentation!:Alimentation;
  alimForm!:FormGroup;
  message!:String;
  constructor(private activatetRoute:ActivatedRoute,private alimentationsService:AlimentationservService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.idAlim = this.activatetRoute.snapshot.params['id'];

    this.alimentationsService.getalimentationById(this.idAlim).subscribe((data) => (this.alimentation = data));

    this.createForm();
  }
  get lescommentaires(){
    return this.alimForm.get('commentaire') as FormArray;
  }
  createForm(){
    this.alimForm = this.fb.nonNullable.group({
      commentaire:this.fb.array([])
    })
  }
  ajouterComm(){
    this.lescommentaires.push(this.fb.group({
      email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      message:['',Validators.required]
    }))
  }
  ajouterAcc(){
    this.alimentationsService.ajoutercomment(this.alimForm.value, this.idAlim).subscribe(data=>this.lescommentaires.push(data));
    this.message="Votre commentaire a été bien enregistrer!!"
  }
  isemailrequired(){
    return this.alimForm.controls['email'].errors?.['required'] &&
    this.alimForm.controls['email'].touched;
  }
  isemailPattern(){
    return this.alimForm.controls['email'].errors?.['pattern'] &&
    this.alimForm.controls['email'].touched;
    }
    ismsgrequired(){
      return this.alimForm.controls['message'].errors?.['required'] &&
    this.alimForm.controls['message'].touched;
    }


}
