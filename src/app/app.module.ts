import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpecializationComponent } from './Components/specialization/specialization.component';
import { DomainsComponent } from './Components/domains/domains.component';
import { ServicesComponent } from './Components/services/services.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { LocationsComponent } from './Components/locations/locations.component';

import { BackToTopComponent } from './Components/back-to-top/back-to-top.component';
import { NewAboutHeroComponent } from './Components/new-about-hero/new-about-hero.component';
import { NewOverviewComponent } from './Components/new-overview/new-overview.component';
import { AboutTeamsComponent } from './Components/about-teams/about-teams.component';
import { HeaderComponent } from './Components/header/header.component';
import { ServicesMainComponent } from './Components/services-main/services-main.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SpecializationComponent,
    DomainsComponent,
    ServicesComponent,
    FooterComponent,
    ContactUsComponent,
    LocationsComponent,
    BackToTopComponent,
    NewAboutHeroComponent,
    NewOverviewComponent,
    AboutTeamsComponent,
    HeaderComponent,
    ServicesMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent,HttpClient]
})
export class AppModule { }
