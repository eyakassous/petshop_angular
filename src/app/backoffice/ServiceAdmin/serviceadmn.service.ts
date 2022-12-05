import { Animal } from './../../frontoffice/modelfront/animal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessoire } from 'src/app/Model/accessoire';
import { Alimentation } from 'src/app/Model/alimentation';
const URL = 'http://localhost:3000/produits';
const URL2 = 'http://localhost:3000/nouveauxprod';
const URL3 = 'http://localhost:3200/alimentations';
const URL4 = 'http://localhost:4800/adopt';
@Injectable({
  providedIn: 'root'
})
export class ServiceadmnService {

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Accessoire[]> {
    return this.http.get<Accessoire[]>(URL);
  }
  getProduitsnouv(): Observable<Accessoire[]> {
    return this.http.get<Accessoire[]>(URL2);
  }
  getProduitsById(id: number): Observable<Accessoire> {
    return this.http.get<Accessoire>(URL+'/' +id);
  }
  getProduitsnouvById(id: number): Observable<Accessoire> {
    return this.http.get<Accessoire>(URL2+'/' +id);
  }
  ajouteracces(acces:Accessoire):Observable<Accessoire>{
    return this.http.post<Accessoire>(URL, acces);
  }
  supprimeracess( id:number)
  {
    return this.http.delete(URL+"/"+id);
  
  }
  modifier(id:number, prod:Accessoire):Observable<Accessoire>{
    return this.http.put<Accessoire>(URL+"/"+id, prod);
  }
  //Les alimentation

  getAlimentation(): Observable<Alimentation[]> {
    return this.http.get<Alimentation[]>(URL3);
  }
  getalimentationById(id: number): Observable<Alimentation> {
    return this.http.get<Alimentation>(URL3+'/'+id);
  }


  ajouteralim(alims:Alimentation):Observable<Alimentation>{
    return this.http.post<Alimentation>(URL3, alims);
  }
  
  /*ajouteralim(alim:Alimentation):Observable<Alimentation>{
    return this.http.post<Alimentation>(URL2, alim);
  }*/
  supprimerAlim( id:number)
  {
    return this.http.delete(URL3+"/"+id);
  
  }
  getAnimals():Observable<Animal[]>{
    return this.http.get<Animal[]>(URL4);
    } 
    getAnimalById(id: number): Observable<Animal> {
      return this.http.get<Animal>(URL4+'/' +id);
    }
  ajouteranim(anim:Animal):Observable<Animal>{
    return this.http.post<Animal>(URL4, anim);
  }
  supprimeranim( id:number)
  {
    return this.http.delete(URL4+"/"+id);
  
  }
  updateAnimal(id:number,a:Animal){
    return this.http.put<Animal>(URL4+"/"+id,a)
  }
 update(cmt:Accessoire[],id: number):Observable<Accessoire[]>{
    return this.http.patch<Accessoire[]>(URL+'/' +id, cmt);
  }
}
