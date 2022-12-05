import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimentation } from 'src/app/Model/alimentation';
import { Commentaire } from 'src/app/Model/commentaire';
const URL2 = 'http://localhost:3200/alimentations';
@Injectable({
  providedIn: 'root'
})
export class AlimentationservService {

  constructor(private http: HttpClient) { }

getAlimentation(): Observable<Alimentation[]> {
  return this.http.get<Alimentation[]>(URL2);
}
getalimentationById(id: number): Observable<Alimentation> {
  return this.http.get<Alimentation>(URL2+'/'+id);
}
ajoutercomment(cmt:Commentaire[],id: number):Observable<Commentaire[]>{
  return this.http.patch<Commentaire[]>(URL2+'/' +id, cmt);
}
getRating(produit:Alimentation)
{
  return produit.rate;
}
}