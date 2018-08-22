import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { DatosSimulacionCredito } from '../models/DatosSimulacionCredito';
import { CuotaCronogramaCredito } from '../../consulta-credito/models/CuotaCronogramaCredito';

@Injectable({
  providedIn: 'root'
})
export class SimulacionCreditoService {
  
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  calculateCronograma(datosSimulacionCredito: DatosSimulacionCredito) {

    const calculateUrl =  this.apiUrl + "creditos/simular-cronograma?" 
                            + "montoDesembolso=" + datosSimulacionCredito.montoDesembolso
                            + "&frecuencia=" + datosSimulacionCredito.frecuencia 
                            + "&tem=" + datosSimulacionCredito.tem 
                            + "&nroCuotas=" +  datosSimulacionCredito.nroCuotas
                            + "&fechaDesembolso=" + datosSimulacionCredito.fechaDesembolso 
                            + "&fechaPrimeraCuota=" + datosSimulacionCredito.fechaPrimeraCuota;

    return this.http.get<CuotaCronogramaCredito[]>(calculateUrl);
  }
}
