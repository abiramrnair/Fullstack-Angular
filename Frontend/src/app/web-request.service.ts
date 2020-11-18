import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly MAIN_URL;

  constructor(private http: HttpClient) { 
    this.MAIN_URL = 'http://localhost:3000';    
  }

  get(uri : string) {
    return this.http.get(`${this.MAIN_URL}/${uri}`);
  }

  put(uri : string) {
    return this.http.put(`${this.MAIN_URL}/${uri}`, null);
  }

  post(uri : string) {
    return this.http.post(`${this.MAIN_URL}/${uri}`, null);
  }

  delete(uri : string) {
    return this.http.delete(`${this.MAIN_URL}/${uri}`);
  } 
}
