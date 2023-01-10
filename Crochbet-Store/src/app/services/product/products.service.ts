import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>('http://fakestoreapi.com/products');
  }

  getProducts(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get('https://bot-app-j7lp5.ondigitalocean.app/products',{ headers, responseType: 'text'});
  }
}
