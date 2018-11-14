import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  successHandler() {
    console.log('here');
    alert('Success sign up !');
  }

  onSignup(data) {
    const email = data.email;
    const password = data.password;
    const repassword = data.repassword;
    if (email !== '' && password !== '' && repassword !== '') {
      if (password === repassword) {
        this.authService.signupUser(email, password);
      } else {
      alert('Check Your Password & Re-Password!!!');
      }
      } else {
        alert('Check Your Input!!!');
      }
   }
}




