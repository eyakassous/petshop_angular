import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { SelectedacessComponent } from './selectedacess/selectedacess.component';
import { SelectedalimComponent } from './selectedalim/selectedalim.component';
import { DashbordfrontComponent } from './dashbordfront/dashbordfront.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MoneyPipe } from './Pipes/money.pipe';
import { AdoptComponent } from './adopt/adopt.component';
import { SelectedanimalComponent } from './selectedanimal/selectedanimal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeacessoiresComponent } from './listeacessoires/listeacessoires.component';
import { RechercheComponent } from './recherche/recherche.component';
import { PanierComponent } from './panier/panier.component';



@NgModule({
  declarations: [
    AboutusComponent,
    AccueilComponent,
    ContactComponent,
    FooterComponent,
    AccessoiresComponent,
    AlimentationComponent,
    SelectedacessComponent,
    SelectedalimComponent,
    DashbordfrontComponent,
    MenuComponent,
    MoneyPipe,
    AdoptComponent,
    SelectedanimalComponent,
    ListeacessoiresComponent,
    RechercheComponent,
    PanierComponent,
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
     HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ]
})
export class FrontofficeModule { }
