import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  readonly reporteUrl: string = environment.reporteUrl;

  constructor(private http: HttpClient) { }

  getReporteCarteraCreditos(): Observable<any> {
    let getUrl = this.reporteUrl + "cartera-creditos";
    return this.http.get<any>(getUrl);
  }

}
