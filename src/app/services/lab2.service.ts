import { Injectable } from '@angular/core';
import {Cripto, RsaRequestDataModel} from "../Models/dataTypes";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Lab2Service {

  constructor(private http: HttpClient) { }

  rsaPost(obj: RsaRequestDataModel, decrypt: boolean): Observable<any> {
    return this.http.post(`https://localhost:7126/RSA?Decrypt=${decrypt}`, obj);
  }
}
