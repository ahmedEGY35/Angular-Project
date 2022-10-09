import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }
  authUser(user:any){
    let UserA = [];
    if(localStorage.getItem("Users")){
      UserA = JSON.parse(localStorage.getItem("Users")as string);
    }
    return UserA.find((p: { Email: any; Pass: any; })=>p.Email===user.Email && p.Pass===user.Pass);
  }
}
