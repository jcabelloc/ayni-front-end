import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { DetalleCronogramaCredito } from '../models/DetalleCronogramaCredito';
import { DatosSimulacionCredito } from '../models/DatosSimulacionCredito';

@Injectable({
  providedIn: 'root'
})
export class SimulacionCreditoService {
  
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSimulacionCronograma(datosSimulacionCredito: DatosSimulacionCredito) {

    const getSimulacionUrl =  this.apiUrl + "creditos/simular-cronograma?" 
                            + "montoDesembolso=" + datosSimulacionCredito.montoDesembolso
                            + "&frecuencia=" + datosSimulacionCredito.frecuencia 
                            + "&tem=" + datosSimulacionCredito.tem 
                            + "&nroCuotas=" +  datosSimulacionCredito.nroCuotas
                            + "&fechaDesembolso=" + datosSimulacionCredito.fechaDesembolso 
                            + "&fechaPrimeraCuota=" + datosSimulacionCredito.fechaPrimeraCuota;

    return this.http.get<DetalleCronogramaCredito[]>(getSimulacionUrl);
  }
}
