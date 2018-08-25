import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { DatosSimulacionAmortizacion } from '../models/DatosSimulacionAmortizacion';
import { CuotaSimulacionAmortizacion } from '../models/CuotaSimulacionAmortizacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmortizacionCreditoService {


  readonly apiUrl = environment.apiUrl + "operaciones/creditos/amortizaciones";
  constructor(private http: HttpClient) { }


  calculateAmortizacion(datosSimulacionAmortizacion: DatosSimulacionAmortizacion) : Observable<CuotaSimulacionAmortizacion[]> {
    let calculateUrl = this.apiUrl + "/simular-amortizacion?idCuenta=" + 
      datosSimulacionAmortizacion.idCuenta + "&montoAmortizacion=" + 
      datosSimulacionAmortizacion.montoAmortizacion;
    return this.http.get<CuotaSimulacionAmortizacion[]>(calculateUrl);
  }

}
