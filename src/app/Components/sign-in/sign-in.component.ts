import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from 'src/app/ServiceM/authorization.service';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user:any={};
  constructor(private authservice:AuthorizationService,private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(loginForm:NgForm){
    // console.log(loginForm.value);
    this.user=Object.assign(this.user,loginForm.value)
    const token = this.authservice.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.Email)
      console.log("Login Successful");
      alertify.success("Login Successful");
      this.router.navigate(['/'])
    }else{
      console.log("Login Failed");
      alertify.error("Login Failed Please Try Again");
    }
  }
}
