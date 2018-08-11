import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cliente } from '../models/Cliente';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = environment.apiUrl + 'clientes';

  constructor(private http: HttpClient) { }


  createCliente(cliente: Cliente): Observable<Cliente>{
    let createUrl = this.apiUrl;
    console.log(cliente);
    return this.http.post<Cliente>(createUrl, cliente, httpOptions)
      .pipe (
        catchError(this.handleError)
      );
  }

  findClientesBy(by: string, input: string) {
    let findByUrl =  this.apiUrl + "?by=" + by + "&input=" + input;
    return this.http.get<Cliente[]>(findByUrl);
  }

  findClienteById(id: number): Observable<Cliente> {
    let findByIdUrl = this.apiUrl + "/" + id;
    return this.http.get<Cliente>(findByIdUrl)
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
