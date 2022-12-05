import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessoire } from 'src/app/Model/accessoire';
import { Commentaire } from 'src/app/Model/commentaire';
const URL = 'http://localhost:3000/produits';
const URL2 = 'http://localhost:3000/nouveauxprod';
@Injectable({
  providedIn: 'root'
})
export class AccessoiresservService {

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
  ajoutercomment(cmt:Commentaire[],id: number):Observable<Commentaire[]>{
    return this.http.patch<Commentaire[]>(URL+'/' +id, cmt);
  }
}
