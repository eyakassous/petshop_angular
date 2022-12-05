import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackofficeModule } from './backoffice/backoffice.module';
import { FrontofficeModule } from './frontoffice/frontoffice.module';
import { ErreurComponent } from './erreur/erreur.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ErreurComponent
  ],
  imports: [
    BrowserModule,
    BackofficeModule,
    FrontofficeModule,
    AppRoutingModule,//il faut etre le dernier
    NgbModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
