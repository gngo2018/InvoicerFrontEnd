import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser){
    return this._http.post(`${environment.Api_Url}/api/Account/Register`, regUserData);
  }
}
