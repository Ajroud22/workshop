import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { AppartementComponent } from './appartements/appartement/appartement.component';
import { AppartementDetailsComponent } from './appartements/appartement-details/appartement-details.component';
import { AddAppartementComponent } from './appartements/add-appartement/add-appartement.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    AppartementComponent,
    AppartementDetailsComponent,
    AddAppartementComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
