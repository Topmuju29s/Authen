import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './page/component/About/about.component';
import { HomeComponent } from './page/component/Home/home.component';
import { NewsComponent } from './page/component/News/news.component';
import { SignupComponent } from './page/component/auth/signup/signup.component';
import { LoginComponent } from './page/component/auth/Login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
