import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioRest } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  urlBase="https://localhost:7235/api/Usuario/GetUsuarios/"
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');


  getUsuarios(){
    return this.http.post<UsuarioRest[]>(this.urlBase+"todos", {headers: this.headers}); // <--- This line
  }


  verificarUsuarioContrasena(_usuario:string, contrasena:string){
    let body = JSON.stringify({_usuario: _usuario, contrasena: contrasena});
    return this.http.post<UsuarioRest>(this.urlBase+"verificar",body, {headers: this.headers}); // <--- This line
  }

  insertarUsuario(_usuario:string, contrasena:string,rol:number){
    let urlAdd="https://localhost:7235/api/Usuario/addUsuarios/"
    let body = JSON.stringify({_usuario: _usuario, contrasena: contrasena,rol:rol});
    return this.http.post<UsuarioRest>(urlAdd,body, {headers: this.headers}); // <--- This line
  }

  

  //getProducts(){
   // const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  // return this.http.get('https://bot-app-j7lp5.ondigitalocean.app/products',{ headers, responseType: 'text'});
  //}
}
