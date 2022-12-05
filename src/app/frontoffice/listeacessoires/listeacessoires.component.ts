import { Component, OnInit } from '@angular/core';
import { Accessoire } from 'src/app/Model/accessoire';
import { AccessoiresservService } from '../ServiceFront/accessoiresserv.service';

@Component({
  selector: 'app-listeacessoires',
  templateUrl: './listeacessoires.component.html',
  styleUrls: ['./listeacessoires.component.css']
})
export class ListeacessoiresComponent implements OnInit {

  lesProduits!:Accessoire[];
  load:boolean=false;
  constructor(private produitService:AccessoiresservService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe (data => this.lesProduits = data);
   
  }
}
