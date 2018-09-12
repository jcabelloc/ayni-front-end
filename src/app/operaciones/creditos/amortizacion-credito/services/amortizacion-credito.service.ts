import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SimulacionAmortizacion } from '../models/SimulacionAmortizacion';
import { AmortizacionCuota } from '../models/AmortizacionCuota';
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


  calculateAmortizacion(simulacionAmortizacion: SimulacionAmortizacion) : Observable<AmortizacionCuota[]> {
    let calculateUrl = this.apiUrl + "/simular-amortizacion?idCuenta=" + 
      simulacionAmortizacion.idCuenta + "&montoAmortizacion=" + 
      simulacionAmortizacion.montoAmortizacion;
    return this.http.get<AmortizacionCuota[]>(calculateUrl);
  }

  createAmortizacion(amortizacionCredito: AmortizacionCredito): Observable<AmortizacionCredito> {
    let createUrl = this.apiUrl;
    return this.http.post<AmortizacionCredito>(createUrl, amortizacionCredito, httpOptions)
            .pipe(
              catchError(this.handleError)
            );
  }

  findAmortizacionById(id: number): Observable<AmortizacionCredito> {
    let findByIdUrl = this.apiUrl + "/" + id;
    return this.http.get<AmortizacionCredito>(findByIdUrl);
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
