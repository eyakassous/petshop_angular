import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Modele/user';
const URL='http://localhost:3400/admin'
@Injectable({
  providedIn: 'root'
})
export class AuthenserviceService {

  constructor(private http: HttpClient) { }
  
  login(login:String,pwd:String):Observable<User[]>{
    return this.http.get<User[]>(URL+"?username="+login+"?pwd="+pwd);
  }

}
