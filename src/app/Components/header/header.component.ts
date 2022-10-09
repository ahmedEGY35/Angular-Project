import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lgInUser:string | null | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  loggedIn(){
    this.lgInUser = localStorage.getItem('token');
    return this.lgInUser;
  }
  onLogout(){
    localStorage.removeItem('token');
    alertify.success("You are Logged Out Successfully");
  }
}
