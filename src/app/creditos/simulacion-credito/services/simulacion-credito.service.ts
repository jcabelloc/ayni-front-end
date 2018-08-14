import { Injectable } from '@angular/core';
import { DatosCredito } from '../models/DatosCredito';
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { DetalleCronogramaCredito } from '../models/DetalleCronogramaCredito';

@Injectable({
  providedIn: 'root'
})
export class SimulacionCreditoService {
  
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSimulacionCronograma(datosCredito: DatosCredito) {

    const getSimulacionUrl =  this.apiUrl + "creditos/simulacion-cronograma?" 
                            + "montoDesembolso=" + datosCredito.montoDesembolso
                            + "&frecuencia=" + datosCredito.frecuencia 
                            + "&tem=" + datosCredito.tem 
                            + "&nroCuotas=" +  datosCredito.nroCuotas
                            + "&fechaDesembolso=" + datosCredito.fechaDesembolso 
                            + "&fechaPrimeraCuota=" + datosCredito.fechaPrimeraCuota;

    return this.http.get<DetalleCronogramaCredito[]>(getSimulacionUrl);
  }
}
