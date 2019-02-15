import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../../inicio/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private authenticated: boolean = false;
  private usuario: Usuario = null;
  apiUrl = environment.apiUrl;
  hostUrl = environment.host;

  constructor(private http: HttpClient) { }

  login(usuario: string, clave: string, callback) {
    let loginUrl = this.apiUrl + "login";
    const headers = new HttpHeaders({'authorization' : 'Basic ' + btoa(usuario + ':' + clave)});
    return this.http.get<Usuario>(loginUrl, {headers: headers})
      .subscribe(
        usuario => {
          if (usuario.usuario) {
            this.usuario = {usuario: usuario.usuario};
          } else {
            this.usuario = null;
          }
          return callback && callback();
        },
        err => {
          this.usuario = null;
          console.log(err);
        }
      );

  }

  logout(){
    let logOut = this.hostUrl + 'logout';
    return this.http.post(logOut,{});
    
  }

  getUsuarioAuth(){
    return this.usuario;
  }

  setUsuarioAuth(val: boolean) {
    this.usuario = null;
  }
}
