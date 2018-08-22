import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credito } from '../models/Credito';
import { environment } from '../../../../environments/environment' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCreditoService {

  readonly apiUrl: string = environment.apiUrl + "creditos"

  constructor(private http: HttpClient) { }

  findCreditoById(idCuenta: number): Observable<Credito> {
    let findByIdUrl = this.apiUrl + "/idCuenta"; 
    return this.http.get<Credito>(findByIdUrl);
  }

  findCreditoByDniCliente(dni: string): Observable<Credito> {
    let findByDniUrl = this.apiUrl + '?dni-cliente=' + dni;
    return this.http.get<Credito>(findByDniUrl)
  }
}
