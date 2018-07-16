import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Telefono } from '../models/Telefono';

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {

  constructor(private http: HttpClient) { }


  findAllTelefonosByIdPersona(idPersona: number) {
    let findAllUrl = "http://localhost:8080/ayni-core/api/persona/" + idPersona + "/telefonos";
    return this.http.get<Telefono[]>(findAllUrl);
  }
}
