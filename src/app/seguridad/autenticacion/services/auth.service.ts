import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../../inicio/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(usuario: string, clave: string, callback) {
    let loginUrl = this.apiUrl + "login";
    const headers = new HttpHeaders({'authorization' : 'Basic ' + btoa(usuario + ':' + clave)});
    return this.http.get<Usuario>(loginUrl, {headers: headers})
      .subscribe(
        usuario => {
          if (usuario.usuario) {
            this.authenticated = true;
          } else {
            this.authenticated = false;
          }
          return callback && callback();
        },
        err => {
          this.authenticated = false;
          console.log(err);
        }
      );

  }

  logout(){
    return this.http.post('logout',{});
    
  }

  getAuth(){
    return this.authenticated;
  }

  setAuth(val: boolean) {
    this.authenticated = false;
  }
}
