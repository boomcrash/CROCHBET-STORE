import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  listarProveedor(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(environment.url_base+environment.urlListarProveedores,{headers: this.headers});
  }
}
