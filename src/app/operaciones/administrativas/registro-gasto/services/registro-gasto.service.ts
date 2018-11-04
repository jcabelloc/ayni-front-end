import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { RegistroGasto } from '../models/RegistroGasto';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
   
};


@Injectable({
  providedIn: 'root'
})
export class RegistroGastoService {
  readonly apiUrl = environment.apiUrl + "operaciones/gastos";
  constructor(private http: HttpClient) { }

  createGasto(gasto: RegistroGasto): Observable<RegistroGasto> {
    let createUrl = this.apiUrl;
    return this.http.post<RegistroGasto>(createUrl, gasto, httpOptions)
            .pipe(
              catchError(this.handleError)
            );
  }

  findGastoById(id: number): Observable<RegistroGasto> {
    let findByIdUrl = this.apiUrl + "/" + id;
    return this.http.get<RegistroGasto>(findByIdUrl);
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
