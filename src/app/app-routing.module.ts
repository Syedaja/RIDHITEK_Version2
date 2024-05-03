import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NewAboutHeroComponent } from './Components/new-about-hero/new-about-hero.component';
import { ServicesMainComponent } from './Components/services-main/services-main.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'about_us', component:NewAboutHeroComponent},
  {path:'contact_us', component:ContactUsComponent},
  {path:'services', component:ServicesMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
