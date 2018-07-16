import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Telefono } from '../models/Telefono';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TelefonoForm } from '../models/TelefonoForm';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {

  constructor(private http: HttpClient) { }


  findAllTelefonosByIdPersona(idPersona: number) {
    let findAllUrl = "http://localhost:8080/ayni-core/api/persona/" + idPersona + "/telefonos";
    return this.http.get<Telefono[]>(findAllUrl);
  }
  
  getTelefonoForm(idPersona: number) {
    let formUrl = "http://localhost:8080/ayni-core/api/persona/" + idPersona + "/telefonos/form";
    return this.http.get<TelefonoForm>(formUrl);
  }

  createTelefono(idPersona: number, telefono: Telefono) {
    const createUrl = "http://localhost:8080/ayni-core/api/persona/" + idPersona + "/telefonos";
    return this.http.post<Telefono>(createUrl, telefono, httpOptions)
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
