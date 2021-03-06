import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { AuthService } from './seguridad/autenticacion/services/auth.service';
import { Router } from '@angular/router';

export interface MenuOption {
  name: string;
  path: string;
}
export interface Module {
  name: string;
  options: MenuOption[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Systema Ayni';
  subTitle = "";
  usuario: string = '';
  modules: Module[] = [
    { name: "Tableros", 
      options: [{name: "Cartera", path: "./tableros/cartera/resumen"}]
    },
    { name: "Personas", 
      options: [{name: "Adm. Persona Nat.", path: "./personas/persona-natural/adm"}]
    },
    { name: "Clientes", 
      options: [{name: "Adm. Clientes", path: "./clientes/adm-cliente/adm"}]
    },
    { name: "Creditos", 
      options: [
        {name: "Simulacion", path:"./creditos/simulacion-credito/simulacion"},
        {name: "Consulta de Cred.", path:"./creditos/consulta-credito/adm"},
      ]
    },
    { name: "Operaciones", 
      options: [
        {name: "Desembolso de Credito", path: "./operaciones/creditos/desembolso-credito/adm"},
        {name: "Amortizacion de Credito", path: "./operaciones/creditos/amortizacion-credito/adm"}, 
        {name: "Registro de Gasto", path: "./operaciones/administrativas/registro-gasto/adm"}, 
        {name: "Traspaso Efectivo", path: "./operaciones/administrativas/traspaso-efectivo/adm"}, 

      ]

    },
    { name: "Reportes", 
      options: [
        {name: "Cartera de Creditos", path: "./reportes/reporte/cartera-creditos"}, 
        {name: "Amortizaciones", path: "./reportes/reporte/amortizaciones"}, 
        {name: "Operaciones", path: "./reportes/reporte/operaciones"}, 
      ]
    },
  ];


  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  showOption(moduleName: string, optionName: string) {
    this.subTitle = moduleName + " > " + optionName;
  }


  isAuthenticated() {
    let usuario = this.authService.getUsuarioAuth()
    if (usuario) {
      this.usuario = usuario.usuario;
      return true;
    }else {
      return false;
    }
  }

  logout(){
    this.authService.logout()
      .subscribe(
        response => {
          this.authService.setUsuarioAuth(null);
          this.router.navigate(['inicio/ingreso']);
        },
        err => {
          console.log(err);
          this.authService.setUsuarioAuth(null);
          this.router.navigate(['inicio/ingreso']);
        }

      );
  }
}

