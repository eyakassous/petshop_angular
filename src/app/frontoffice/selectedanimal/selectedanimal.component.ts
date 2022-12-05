import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../modelfront/animal';
import { AnimalService } from '../ServiceFront/animal.service';

@Component({
  selector: 'app-selectedanimal',
  templateUrl: './selectedanimal.component.html',
  styleUrls: ['./selectedanimal.component.css']
})
export class SelectedanimalComponent implements OnInit {

  idAnimal!:number; 
  Animal!:Animal;
  constructor(private activatetRoute:ActivatedRoute,private animalsService:AnimalService) { }

  ngOnInit(): void {
    this.idAnimal = this.activatetRoute.snapshot.params['id'];
    this.animalsService
      .getAnimalById(this.idAnimal)
      .subscribe((data) => (this.Animal = data));
  }

}
