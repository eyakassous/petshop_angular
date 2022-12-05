import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../modelfront/contact';
const URL = 'http://localhost:5200/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactservService {

  constructor(private http: HttpClient) { }
  ajouterctc(acces:Contact):Observable<Contact>{
    return this.http.post<Contact>(URL, acces);
  }
}
