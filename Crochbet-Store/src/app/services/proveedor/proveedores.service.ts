import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Proveedor } from 'src/app/interfaces/proveedor';

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

  agregarProveedor(proveedor:Proveedor){
    const urlAgregarProveedores="https://localhost:7235/api/Proveedor/addProveedores"
    let body = JSON.stringify(proveedor);
    return this.http.post<any>(urlAgregarProveedores,body, {headers: this.headers}); // <--- This line
  }

  editarProveedor(proveedor:Proveedor){
    const urlEditarProveedores="https://localhost:7235/api/Proveedor/editProveedores"
    let body = JSON.stringify(proveedor);
    return this.http.put<any>(urlEditarProveedores,body, {headers: this.headers}); // <--- This line
  }

  /*eliminarProveedor(idProveedor:number){
    const urlEliminarProveedores="https://localhost:7235/api/Proveedor/deleteProveedores"
    let body = JSON.stringify({idProveedor:idProveedor});
    return this.http.delete<any>(urlEliminarProveedores,body, {headers: this.headers}); // <--- This line
  }*/
}
