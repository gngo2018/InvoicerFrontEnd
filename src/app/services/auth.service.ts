import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { LoginUser } from '../models/LoginUser';
import { Token } from '../models/Token';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser){
    return this._http.post(`${environment.Api_Url}api/Account/Register`, regUserData);
  }
 
  login(loginInfo){
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this._http.post(`${environment.Api_Url}token`, str).subscribe((token: Token) => {
      localStorage.setItem('id_token', token.access_token);
      this._router.navigate(['/'])
    });
  }

}
