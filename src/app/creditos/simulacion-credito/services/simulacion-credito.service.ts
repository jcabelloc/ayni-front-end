import { Injectable } from '@angular/core';
import { Credito } from '../models/Credito';
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { DetalleCronogramaCredito } from '../models/DetalleCronogramaCredito';

@Injectable({
  providedIn: 'root'
})
export class SimulacionCreditoService {
  
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSimulacionCronograma(credito: Credito) {

    const getSimulacionUrl =  this.apiUrl + "creditos/simular-cronograma?" 
                            + "montoDesembolso=" + credito.montoDesembolso
                            + "&frecuencia=" + credito.frecuencia 
                            + "&tem=" + credito.tem 
                            + "&nroCuotas=" +  credito.nroCuotas
                            + "&fechaDesembolso=" + credito.fechaDesembolso 
                            + "&fechaPrimeraCuota=" + credito.fechaPrimeraCuota;

    return this.http.get<DetalleCronogramaCredito[]>(getSimulacionUrl);
  }
}
