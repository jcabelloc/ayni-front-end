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

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createPersonaNatural (personaNatural: PersonaNatural): Observable<PersonaNatural> {
    const createUrl = this.apiUrl + "personas-naturales";
    return this.http.post<PersonaNatural>(createUrl, personaNatural, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  findPersonaNaturalById (id: number): Observable<PersonaNatural> {
    const findByIdUrl = this.apiUrl + "personas-naturales/" + id;
    return this.http.get<PersonaNatural>(findByIdUrl);
  }

  updatePersonaNatural(id: number, personaNatural: PersonaNatural) {
    const updateUrl =  this.apiUrl + "personas-naturales/" + id;
    return this.http.put<PersonaNatural> (updateUrl, personaNatural)
      .pipe(
        catchError(this.handleError)
      );
  }

  findFirstNumberOfPersonasNaturales(max: number) {
    //let findFirstNumberUrl = "http://localhost:8080/ayni-core/api/personas-naturales/?max=" + max;
    //const headers = new HttpHeaders({'authorization' : 'Basic ' + btoa('mary:test123')});
    let findFirstNumberUrl = this.apiUrl + "personas-naturales/?max=" + max;
    return this.http.get<PersonaNatural[]>(findFirstNumberUrl);
  }

  findPersonasNaturalesBy(by: string, input: string) {
    let findBy =  this.apiUrl + "personas-naturales?by=" + by + "&input=" + input;
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
}
