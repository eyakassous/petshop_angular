import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenserviceService } from './ServiceAdmin/authenservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private authservice:AuthenserviceService,
    private router:Router){}
  canActivate()
    {
      console.log('le guard a bien été appelé');
       return true;
    }
   
  
}
