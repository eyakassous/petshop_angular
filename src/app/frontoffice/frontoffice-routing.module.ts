import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdoptComponent } from './adopt/adopt.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { ContactComponent } from './contact/contact.component';
import { DashbordfrontComponent } from './dashbordfront/dashbordfront.component';
import { SelectedacessComponent } from './selectedacess/selectedacess.component';
import { SelectedalimComponent } from './selectedalim/selectedalim.component';
import { SelectedanimalComponent } from './selectedanimal/selectedanimal.component';

const routes: Routes = [
  {path:'' ,component:DashbordfrontComponent,
    children:[ 
      {path:'accueil',title:'Accueil', component:AccueilComponent},
      {path:'produits/:id',title:'Produit choisit', component:SelectedacessComponent},
      {path:'alimentation/:id',title:'Alimentation choisit', component:SelectedalimComponent},
      {path:'adopt',title:'Alimentation choisit', component:AdoptComponent},
      {path:'adopt/:id',title:'Alimentation choisit', component:SelectedanimalComponent},
      {path:'accueil/:id',title:'Accessoire choisit', component:SelectedacessComponent},
      {path:'contact',title:'Contact', component:ContactComponent},
      {path:'aboutus',title:'A propos de nous', component:AboutusComponent},
      {path:'produits',title:'Accessoires', component:AccessoiresComponent},
      {path:'alimentation',title:'Alimentation', component:AlimentationComponent},
      {path:'', redirectTo:'accueil', pathMatch:'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
