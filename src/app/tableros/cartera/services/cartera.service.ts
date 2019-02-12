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

  queryCarteraSaldo(mes: string, groupBy: string): Observable<XYSerie> {
    let queryUrl = this.apiUrl + "/saldo/?mes=" + mes + "&groupBy=" + groupBy;
    return this.http.get<XYSerie>(queryUrl);
  }

  queryCarteraAtrasada(diasAtrasoMayorA: number, mes: string, groupBy: string): Observable<XYSerie> {
    let queryUrl = this.apiUrl + "/atrasada?diasAtrasoMayorA=" + diasAtrasoMayorA +  
          "&mes=" + mes + "&groupBy=" + groupBy;
    return this.http.get<XYSerie>(queryUrl);
  }
  
}
