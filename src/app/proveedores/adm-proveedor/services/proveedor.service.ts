import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { Proveedor } from '../../shared-proveedor/models/Proveedor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

    readonly apiUrl: string = environment.apiUrl + "proveedores"


  constructor(private http: HttpClient) { }

  
  findProveedoresBy(by: string, input: string): Observable<Proveedor[]> {
    let findByUrl =  this.apiUrl + "?by=" + by + "&input=" + input;
    return this.http.get<Proveedor[]>(findByUrl);
  }

  findProveedorById(id: number): Observable<Proveedor> {
    let findByIdUrl = this.apiUrl + "/" + id;
    return this.http.get<Proveedor>(findByIdUrl);
  }

}
