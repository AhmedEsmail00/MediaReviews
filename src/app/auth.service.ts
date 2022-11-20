import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
import{IregisterForm} from './iregister-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient,private _Router:Router)
  {
    if(localStorage.getItem('token')!=null){
      this.saveUserData();
    }
   }

  saveUserData(){
    let encodedToken= JSON.stringify(localStorage.getItem('token'));
    let decodedToken:any=jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    console.log('welcome');
    console.log(this.userData);
  }

  signUp(_IregisterForm:IregisterForm):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',_IregisterForm)
  }

  signIn(_IregisterForm:IregisterForm):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',_IregisterForm)
  }
  logOut(){
    this.userData.next(null);
    localStorage.removeItem('token');
    this._Router.navigateByUrl('/login');

  }
}
