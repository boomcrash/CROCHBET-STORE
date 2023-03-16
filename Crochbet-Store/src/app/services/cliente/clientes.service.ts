import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteRest, Cliente } from 'src/app/interfaces/cliente';
import { environment } from 'src/environments/environment.development';
import { UsuarioRest } from 'src/app/interfaces/usuario';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  urlBase="https://localhost:7235/api/Usuario/GetUsuarios/"
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  listarCliente(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(environment.url_base+environment.urlListarClientes,{headers: this.headers});
  }

  GetClienteByUserId(id:number){
    const urlGetById="https://localhost:7235/api/Cliente/GetClienteByUserId"
    let body = JSON.stringify({usuarioId: id});
    return this.http.post<any>(urlGetById,body, {headers: this.headers}); // <--- This line
  }

  //verificar si existe usuarios
  getUsuarioIdParameter(idUsuario:number){
    return this.http.post<UsuarioRest[]>(this.urlBase+"verificarId?id="+idUsuario, {headers: this.headers}); // <--- This line
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

  putCliente(cliente:Cliente){
    const urlsetById="https://localhost:7235/api/Cliente/editClientes"
    let body = JSON.stringify(cliente);
    return this.http.put<any>(urlsetById,body, {headers: this.headers}); // <--- This line
  } 

  DeleteCliente(idCliente:number):Observable<Boolean>{
    const headers = new HttpHeaders().set ('Content-Type', 'application/json; charset=utf-8')
    return this.http.delete<any>(environment.url_base+environment.urldeleteClientes+idCliente,{headers: this.headers}); // <--- This line
  }
}
