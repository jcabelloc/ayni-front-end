import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DesembolsoCredito } from '../models/DesembolsoCredito';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
   
};


@Injectable({
  providedIn: 'root'
})
export class DesembolsoCreditoService {
  readonly apiUrl: string = environment.apiUrl + "operaciones/creditos/desembolsos";

  constructor(private http: HttpClient) { }

  createDesembolso(desembolsoCredito: DesembolsoCredito) {
    let createUrl = this.apiUrl; 
    return this.http.post<DesembolsoCredito>(createUrl, desembolsoCredito, httpOptions) 
      .pipe(
        catchError(this.handleError)
      );
  }

  
  buildReporteSolicitud (desembolsoCredito: DesembolsoCredito) {
    const buildReporteUrl = this.apiUrl + "/build-reporte-solicitud";
    let headers = new HttpHeaders({
        'Content-Type':  'application/json',
    });
    return this.http.post(buildReporteUrl, desembolsoCredito, {headers:headers,  responseType: "blob"})
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