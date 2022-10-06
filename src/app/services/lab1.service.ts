import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cripto, ResponseModel } from '../Models/dataTypes';

@Injectable({
  providedIn: 'root'
})
export class Lab1Service {

  constructor(private http: HttpClient) { }

  postEncrypt(obj: Cripto, decrypt: boolean): Observable<any> {
    return this.http.post(`https://localhost:7126/Lab2?Decrypt=${decrypt}`, obj);
  }
}
