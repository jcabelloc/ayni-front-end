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

  queryCartera(valor: string, mes: string, groupBy: string): Observable<XYSerie> {
    let queryUrl = this.apiUrl + "?valor=" + valor + 
      "&mes=" + mes + "&groupBy=" + groupBy;
    return this.http.get<XYSerie>(queryUrl);
  }
  
}
