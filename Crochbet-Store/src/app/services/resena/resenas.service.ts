import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {Reseña} from '../../interfaces/reseña';
@Injectable({
  providedIn: 'root'
})
export class ResenasService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  getResenas(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(environment.url_base+environment.url_getResenas,{headers: this.headers});
  }

  getResenaforDivs(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const query = 'SELECT * FROM reseñas ORDER BY fecha DESC LIMIT 3';
    return this.http.post(environment.url_base+environment.url_getResenas, { query }, { headers: this.headers });
  }

  editarResena(resena: Reseña): Observable<any> {
    const url = `${environment.url_base+environment.url_getResenas}${resena.idResena}`; // URL de la API para actualizar la reseña con el id correspondiente
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(url, resena, { headers });
  }

  addResena(resena: Reseña): Observable<any> {
    const url = `${environment.url_base+environment.url_addResenas}`; // URL de la API para agregar la reseña
    return this.http.post(url, resena, { headers: this.headers });
  }

  deleteResena(idResena:number): Observable<any> {
    const url = `${environment.url_base+environment.url_deleteResenas}/${idResena}`; // URL de la API para eliminar la reseña con el id correspondiente
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(url, { headers });
  }
}
