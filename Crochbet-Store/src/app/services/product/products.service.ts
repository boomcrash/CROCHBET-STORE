import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
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
    return this.http.post(environment.url_base+environment.url_getProductos,{headers: this.headers});
  }

  getCategories(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(environment.url_base+environment.url_getProductosCategories,{headers: this.headers});
  }

  getProveedorId(idProveedor:number){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    let body = JSON.stringify({proveedorId: idProveedor});
    return this.http.post(environment.url_base+environment.url_getProveedorId,body,{headers: this.headers});
  }

  putProducto(producto:Product){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    let body = JSON.stringify(producto);
    return this.http.put(environment.url_base+environment.url_putProducto,body,{headers: this.headers});
  }

  deleteProducto(idProducto:number): Observable<Boolean>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.delete<any>(environment.url_base+environment.url_deleteProductos+idProducto,{headers: this.headers});
  }

}
