import { Injectable } from '@angular/core';
import { CuentaGasto } from '../models/CuentaGasto';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaGastoService {

  readonly apiUrl: string = environment.apiUrl + "cuentas-gasto"

  constructor(private http: HttpClient) { }

    
  findAllCuentasGasto(): Observable<CuentaGasto[]> {
    let findByIdProveedorUrl =  this.apiUrl;
    return this.http.get<CuentaGasto[]>(findByIdProveedorUrl);
  }

}

