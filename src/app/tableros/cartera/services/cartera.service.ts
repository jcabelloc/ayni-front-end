import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { XYSerie } from '../models/XYSerie';


@Injectable({
  providedIn: 'root'
})
export class CarteraService {

  readonly apiUrl = environment.apiUrl + "tableros/cartera";

  constructor(private http: HttpClient) { }

  queryCarteraSaldo(desde: string, hasta: string, groupBy: string): Observable<XYSerie> {
    let queryUrl = this.apiUrl + "/saldo/?desde=" + desde + "&hasta=" + hasta + "&groupBy=" + groupBy;
    return this.http.get<XYSerie>(queryUrl);
  }

  queryCarteraAtrasada(diasAtrasoMayorA: number, desde: string, hasta: string,groupBy: string): Observable<XYSerie> {
    let queryUrl = this.apiUrl + "/atrasada?diasAtrasoMayorA=" + diasAtrasoMayorA +  
      "&desde=" + desde + "&hasta=" + hasta + "&groupBy=" + groupBy;
    return this.http.get<XYSerie>(queryUrl);
  }

  queryDesembolsos(valor: string, desde: string, hasta: string, groupBy: string): Observable<XYSerie> {
    let queryUrl = this.apiUrl + "/desembolsos?valor=" + valor +  
      "&desde=" + desde + "&hasta=" + hasta + "&groupBy=" + groupBy;
    return this.http.get<XYSerie>(queryUrl);
  }
  
}
