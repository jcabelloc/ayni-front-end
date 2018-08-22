import { Injectable } from '@angular/core';
import { PersonaNatural } from '../models/PersonaNatural';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonaNaturalService {

  readonly apiUrl: string = environment.apiUrl + "personas-naturales";

  constructor(private http: HttpClient) { }

  createPersonaNatural (personaNatural: PersonaNatural): Observable<PersonaNatural> {
    const createUrl = this.apiUrl;
    return this.http.post<PersonaNatural>(createUrl, personaNatural, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  findPersonaNaturalById (id: number): Observable<PersonaNatural> {
    const findByIdUrl = this.apiUrl + "/" + id;
    return this.http.get<PersonaNatural>(findByIdUrl);
  }

  updatePersonaNatural(id: number, personaNatural: PersonaNatural) {
    const updateUrl =  this.apiUrl + "/" + id;
    return this.http.put<PersonaNatural> (updateUrl, personaNatural)
      .pipe(
        catchError(this.handleError)
      );
  }

  findFirstNumberOfPersonasNaturales(max: number) {
    let findFirstNumberUrl = this.apiUrl + "?max=" + max;
    return this.http.get<PersonaNatural[]>(findFirstNumberUrl);
  }

  findPersonasNaturalesBy(by: string, input: string) {
    let findBy =  this.apiUrl + "?by=" + by + "&input=" + input;
    return this.http.get<PersonaNatural[]>(findBy);
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

  //----------------------------------------------------------
  findFirstNumberOfExtensionPersonasNaturales(max: number) {
    let findFirstNumberOfExtensionUrl = this.apiUrl + "/extension?max=" + max;
    return this.http.get<PersonaNatural[]>(findFirstNumberOfExtensionUrl);
  }

  findExtensionPersonasNaturalesBy(by: string, input: string) {
    let findExtensionBy =  this.apiUrl + "/extension?by=" + by + "&input=" + input;
    return this.http.get<PersonaNatural[]>(findExtensionBy);
  }
}
