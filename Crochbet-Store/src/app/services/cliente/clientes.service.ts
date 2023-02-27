import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteRest } from 'src/app/interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  urlBase="https://localhost:7235/api/Usuario/GetUsuarios/"
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');


  GetClienteByUserId(id:number){
    const urlGetById="https://localhost:7235/api/Cliente/GetClienteByUserId"
    let body = JSON.stringify({usuarioId: id});
    return this.http.post<any>(urlGetById,body, {headers: this.headers}); // <--- This line
  }

  AddCliente(nombre:string, apellido:string,ciudad:string,direccion:string,telefono:string,correo:string,usuarioId:number){
    const urlGetById="https://localhost:7235/api/Cliente/addClientes"
    let body = JSON.stringify({nombre: nombre,apellido:apellido,ciudad:ciudad,direccion:direccion,telefono:telefono,correo:correo,usuarioId:usuarioId});
    return this.http.post<any>(urlGetById,body, {headers: this.headers}); // <--- This line
  }

  SetCliente(idCliente:number,nombre:string, apellido:string,ciudad:string,direccion:string,telefono:string,correo:string){
    const urlsetById="https://localhost:7235/api/Cliente/editClientes"
    let body = JSON.stringify({idCliente:idCliente,nombre: nombre,apellido:apellido,ciudad:ciudad,direccion:direccion,telefono:telefono,correo:correo});
    return this.http.put<any>(urlsetById,body, {headers: this.headers}); // <--- This line
  }
}
