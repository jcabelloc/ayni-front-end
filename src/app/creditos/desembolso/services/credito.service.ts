import { Injectable } from '@angular/core';
import { Credito } from '../../simulacion-credito/models/Credito';
import { environment } from '../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  readonly apiUrl: string = environment.apiUrl + "creditos";

  constructor(private http: HttpClient) { }

  createCredito(credito: Credito) {
    let createUrl = this.apiUrl; 
    return this.http.post<Credito>(createUrl, credito, httpOptions) 
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
    return throwError(
      'Something bad happened; please try again later.');
  };
}
