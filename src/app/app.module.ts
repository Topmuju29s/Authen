import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './page/component/Home/home.component';
import { AboutComponent } from './page/component/About/about.component';
import { NewsComponent } from './page/component/News/news.component';
import { HeaderComponent } from './page/component/Header/header.component';
import { SignupComponent } from './page/component/auth/signup/signup.component';
import { LoginComponent } from './page/component/auth/Login/login.component';
import { AuthService } from './page/component/auth/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent

  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
