import { Animal } from './../../frontoffice/modelfront/animal';
import { Component, OnInit } from '@angular/core';
import { ServiceadmnService } from '../ServiceAdmin/serviceadmn.service';

@Component({ 
  selector: 'app-listeanimaux',
  templateUrl: './listeanimaux.component.html',
  styleUrls: ['./listeanimaux.component.css']
})
export class ListeanimauxComponent implements OnInit {
  lesanimaux!:Animal[];
 
  constructor(private servadmin:ServiceadmnService) { }

  ngOnInit(): void {
    this.servadmin.getAnimals().subscribe (data => this.lesanimaux = data)
  
  }
  supprimer(animal: Animal) {
    this.servadmin
      .supprimeracess(animal.id) 
      .subscribe(
        (data) => (this.lesanimaux = this.lesanimaux.filter((e) => e.id != animal.id))
      );
  }
 
   
  

}

