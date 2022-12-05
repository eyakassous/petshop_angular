import { Component, OnInit } from '@angular/core';
import { Animal } from '../modelfront/animal';
import { AnimalService } from '../ServiceFront/animal.service';
 
@Component({ 
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {
  lesAnimaux!:Animal[];
  searchText: string = '';
 
  constructor(private animalsService:AnimalService) { }
 filterdog!:any;
  ngOnInit(): void {
    
    this.animalsService.getAnimals().subscribe (data => this.lesAnimaux = data)
  }
  // onDog(){
    
  // }
  afficher:number=0;
  animalFilter(lesAnimaux:Animal[],type:string){
    const a =lesAnimaux.filter(animal => animal.type == type);
    return a;
    }
    transformation(n:number){
      this.afficher=n;
    }
    animalDisponible(lesAnimaux:Animal[],disponible:boolean){
      const a =lesAnimaux.filter(animal => animal.disponible == disponible);
      return a;
      }
    weigthFilter1(lesAnimaux:Animal[],weigth:number){
      const a =lesAnimaux.filter(animal => animal.weight<weigth);
      return a;
      }
      weigthFilter2(lesAnimaux:Animal[],weigthmin:number,weightmax:number){
        const a =lesAnimaux.filter(animal => animal.weight<=weightmax && animal.weight>=weigthmin );
        return a;
        }
        weigthFilter3(lesAnimaux:Animal[],weigth:number){
          const a =lesAnimaux.filter(animal => animal.weight>weigth);
          return a;
          }
          onSearchTextentered(searchvalue: string){
            this.searchText=searchvalue;
            //console.log(this.searchText);
          }
        }

