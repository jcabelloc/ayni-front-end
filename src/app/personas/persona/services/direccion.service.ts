import { Injectable } from '@angular/core';
import { Direccion } from '../models/Direccion';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ConfiguracionUbigeo } from '../models/ConfiguracionUbigeo';
import { environment } from '../../../../environments/environment'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  apiUrl = environment.apiUrl + "personas";

  constructor(private http: HttpClient) { }

  createDireccion(idPersona: number, direccion: Direccion): Observable<Direccion> {
    const createUrl = this.apiUrl + "/" + idPersona + "/direcciones";
    return this.http.post<Direccion>(createUrl, direccion, httpOptions)
      .pipe(
        catchError(this.handleError)
      );

  }

  getConfiguracionUbigeo() {
    let configUbigeoUrl = this.apiUrl + "/configuracion-ubigeo";
    return this.http.get<ConfiguracionUbigeo>(configUbigeoUrl);
  }

  findAllDireccionesByIdPersona(idPersona: number) {
    const findAllUrl = this.apiUrl + "/" + idPersona + "/direcciones";
    return this.http.get<Direccion[]>(findAllUrl);
  }

  deleteDireccion(idPersona: number, idDireccion: number){
    const deleteUrl = this.apiUrl + "/" + idPersona + "/direcciones/" + idDireccion;
    return this.http.delete(deleteUrl, httpOptions)
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

