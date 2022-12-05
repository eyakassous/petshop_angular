import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormaanimalComponent } from './formaanimal/formaanimal.component';
import { FormaccessoiresComponent } from './formaccessoires/formaccessoires.component';
import { FormalimentationComponent } from './formalimentation/formalimentation.component';
import { ListeproduitsComponent } from './listeproduits/listeproduits.component';
import { LoginComponent } from './login/login.component';
import { ModifProdComponent } from './modif-prod/modif-prod.component';

const routes: Routes = [
  {path:'admin',
  canActivate:[AuthguardGuard],
    children:[
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'login', component:LoginComponent},
      {path:'dashbord', component:DashbordComponent,
        children:[
          {path:'liste', component:ListeproduitsComponent},
          {path:'', redirectTo:'liste', pathMatch:'full'},
          {path:'modifier', component:ModifProdComponent},
          {path:'ajouteracces', component:FormaccessoiresComponent},
          {path:'ajouteralim', component:FormalimentationComponent},
          {path:'ajouteranim', component:FormaanimalComponent}
      ]},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
