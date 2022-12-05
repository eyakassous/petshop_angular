import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './backoffice/login/login.component';
import { ErreurComponent } from './erreur/erreur.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:'**',component:ErreurComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
