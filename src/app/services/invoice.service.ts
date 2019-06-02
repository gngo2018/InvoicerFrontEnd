import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Invoice } from '../models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private _http: HttpClient) { }

  getInvoices(){
    return this._http.get(`${environment.Api_Url}api/Invoice`, {headers: this.getHeaders()});
  }

  getInvoiceById(id:string){
    return this._http.get(`${environment.Api_Url}api/Invoice/${id}`, {headers: this.getHeaders()});
  }

  createInvoice(invoice: Invoice){
    return this._http.post(`${environment.Api_Url}api/Invoice`, invoice, {headers: this.getHeaders()});
  }

  updateInvoice(invoice: Invoice){
    return this._http.put(`${environment.Api_Url}api/Invoice`, invoice, {headers: this.getHeaders()});
  }

  deleteInvoice(id: number){
    return this._http.delete(`${environment.Api_Url}api/Invoice/${id}`, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
