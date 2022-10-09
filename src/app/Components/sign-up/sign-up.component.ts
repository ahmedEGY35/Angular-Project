import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Interfaces/User';
import { UserServiceService } from 'src/app/ServiceM/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: any={};
  constructor(private userService:UserServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSignUp(SignUpForm:NgForm){
    if(SignUpForm.valid){
      // console.log(SignUpForm.value);
      this.user=Object.assign(this.user,SignUpForm.value);
      this.userService.addUser(this.user);
      this.router.navigate(['/SignIn']);
    }
  }
}
