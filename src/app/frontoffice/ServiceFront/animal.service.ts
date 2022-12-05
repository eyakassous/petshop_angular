import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../modelfront/animal';
const URL='http://localhost:4800/Animals';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  constructor(private http1:HttpClient) { }
   
  getAnimals():Observable<Animal[]>{
    return this.http1.get<Animal[]>(URL);
    } 
    // getCat(type:string):Observable<Animals[]>{
    //   return this.http1.get<Animals[]>( `${URL}/${type}`);
    //   }
    getAnimalById(id: number): Observable<Animal> {
      return this.http1.get<Animal>(URL+'/' +id);
    }
}
