import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  entersearchvalue:string='';


  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>;
  
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.entersearchvalue);
  }

}
