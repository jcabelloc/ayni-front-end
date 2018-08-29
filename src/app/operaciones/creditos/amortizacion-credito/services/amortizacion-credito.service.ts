import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DatosSimulacionAmortizacion } from '../models/DatosSimulacionAmortizacion';
import { CuotaSimulacionAmortizacion } from '../models/CuotaSimulacionAmortizacion';
import { Observable, throwError } from 'rxjs';
import { AmortizacionCredito } from '../models/AmortizacionCredito';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
   
};

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

  createAmortizacion(amortizacionCredito: AmortizacionCredito): Observable<AmortizacionCredito> {
    let createUrl = this.apiUrl;
    return this.http.post<AmortizacionCredito>(createUrl, amortizacionCredito, httpOptions)
            .pipe(
              catchError(this.handleError)
            );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

}
