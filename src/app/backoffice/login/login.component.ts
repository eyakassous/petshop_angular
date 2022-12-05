import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenserviceService } from '../ServiceAdmin/authenservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string="";

  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private authserv:AuthenserviceService ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      login:['', Validators.required],
      password:['', Validators.required]
    })
  }
  onSubmit(){
    this.authserv.login(this.loginForm.value['login'],this.loginForm.value['password'])
    .subscribe(
      data=>{
        if(data.length==0)
        {alert("Authentification incorrecte!!!");
        this.loginForm.reset();
        }
      else
          this.router.navigate(['admin/dashbord']);
      }
    )
    
  }


}
