import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { FormaccessoiresComponent } from './formaccessoires/formaccessoires.component';
import { FormalimentationComponent } from './formalimentation/formalimentation.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ListeproduitsComponent } from './listeproduits/listeproduits.component';
import { FormaanimalComponent } from './formaanimal/formaanimal.component';
import { ListeanimauxComponent } from './listeanimaux/listeanimaux.component';
import { ModifProdComponent } from './modif-prod/modif-prod.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FormaccessoiresComponent,
    FormalimentationComponent,
    LoginComponent,
    MenuComponent,
    DashbordComponent,
    ListeproduitsComponent,
    FormaanimalComponent,
    ListeanimauxComponent,
    ModifProdComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ]
})
export class BackofficeModule { }
