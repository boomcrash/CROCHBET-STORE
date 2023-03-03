import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private http:HttpClient) { }

  getResponse(mensaje:string){
    let baseURL='http://167.71.26.121:5000/bot';
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const body=JSON.stringify({sms:mensaje});
    console.log(body)
    return this.http.post(baseURL, body,{'headers':headers , responseType: 'text' });
  }
}
 