import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CareersComponent } from './careers/careers.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [

  { path : '', component:MainPageComponent},
  { path: 'signup',component: SignupComponent},
  { path: 'login',component: LoginComponent},
  { path: 'home',component: HomeComponent},
  { path: 'mainpage', component: MainPageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'gallery', component: GalleryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
