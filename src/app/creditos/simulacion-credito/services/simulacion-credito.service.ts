import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { SimulacionCredito } from '../models/SimulacionCredito';
import { CuotaCredito } from '../../consulta-credito/models/CuotaCredito';

@Injectable({
  providedIn: 'root'
})
export class SimulacionCreditoService {
  
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  calculateCuotas(simulacionCredito: SimulacionCredito) {

    const calculateUrl =  this.apiUrl + "creditos/simular-cuotas?" 
                            + "montoDesembolso=" + simulacionCredito.montoDesembolso 
                            + "&frecuencia=" + simulacionCredito.frecuencia 
                            + "&tem=" + simulacionCredito.tem 
                            + "&nroCuotas=" +  simulacionCredito.nroCuotas
                            + "&fechaDesembolso=" + simulacionCredito.fechaDesembolso 
                            + "&fechaPrimeraCuota=" + simulacionCredito.fechaPrimeraCuota;

    return this.http.get<CuotaCredito[]>(calculateUrl);
  }
}
