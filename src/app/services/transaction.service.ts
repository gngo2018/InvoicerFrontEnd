import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from 'src/app/models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private _http: HttpClient) { }

  getTransactions(){
    return this._http.get(`${environment.Api_Url}api/Transaction`, {headers: this.getHeaders()});
  }

  createTransaction(transaction: Transaction){
    return this._http.post(`${environment.Api_Url}api/Transaction`, transaction, {
      headers: this.getHeaders()
    });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
