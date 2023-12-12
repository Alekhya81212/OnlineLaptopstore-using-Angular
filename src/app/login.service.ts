import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:8080/user"
  //HttpClient is used for HTTP request and Response
    constructor(private httpClient:HttpClient) { }
  //login user is the user defined method
  //It took class as a parameter
    loginUser(user:User):Observable<Object>{
      //It displays email and password on the console
      console.log(user);
      //Email, password is posting to backend
      return this.httpClient.post(`${this.baseUrl}`,user);
    }
  }
  

