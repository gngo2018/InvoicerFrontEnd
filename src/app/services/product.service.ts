import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get(`${environment.Api_Url}api/Product`, {headers: this.getHeaders()});
  }

  getProductById(id:string){
    return this._http.get(`${environment.Api_Url}api/Product/${id}`, {headers: this.getHeaders()});
  }

  createProduct(product: Product){
    return this._http.post(`${environment.Api_Url}api/Product`, product, {headers: this.getHeaders()});
  }

  updateProduct(product: Product){
    return this._http.put(`${environment.Api_Url}api/Product`, product, {headers: this.getHeaders()});
  }

  deleteProduct(id:number){
    return this._http.delete(`${environment.Api_Url}api/Product/${id}`, {headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
 