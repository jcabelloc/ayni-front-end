import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credito } from '../models/Credito';
import { environment } from '../../../../environments/environment' 
import { Observable } from 'rxjs';
import { CuotaCredito } from '../models/CuotaCredito';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCreditoService {

  readonly apiUrl: string = environment.apiUrl + "creditos"

  constructor(private http: HttpClient) { }

  findCreditoById(idCuenta: number): Observable<Credito> {
    let findByIdUrl = this.apiUrl + "/" + idCuenta; 
    return this.http.get<Credito>(findByIdUrl);
  }

  findCreditosBy(by: string, input: string): Observable<Credito[]> {
    let findBy = this.apiUrl + "?by=" + by + "&input=" + input
    return this.http.get<Credito[]>(findBy)
  }

  findCuotasByIdCuentaAndEstado(idCuenta: number, estado: string): Observable<CuotaCredito[]> {
    let findByIdCuentaAndEstadoUrl = this.apiUrl + "/" + idCuenta + '/cuotas-credito?estado=' + estado;
    return this.http.get<CuotaCredito[]>(findByIdCuentaAndEstadoUrl);
  }

  findAllCuotasByIdCuenta(idCuenta: number): Observable<CuotaCredito[]> {
    let findByIdCuenta = this.apiUrl + "/" + idCuenta + '/cuotas-credito';
    return this.http.get<CuotaCredito[]>(findByIdCuenta);
  }

}
