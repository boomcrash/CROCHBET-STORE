import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  getAllProducts(){
    return this.http.get<Product[]>('http://fakestoreapi.com/products');
  }

  getProducts(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post('https://localhost:7235/api/Producto/getProductos',{headers: this.headers});
  }

  getCategories(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post('https://localhost:7235/api/Producto/getProductosCategories',{headers: this.headers});
  }

}
