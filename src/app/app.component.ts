import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { AuthService } from './seguridad/autenticacion/services/auth.service';

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
  modules: Module[] = [
    { name: "Personas", 
      options: [{name: "Adm. Persona Nat.", path: "./personas/persona-natural/adm"}, {name: "Adm. Persona Jur.", path: "./personas/persona-natural/create"}]
    },
    { name: "Clientes", 
      options: [{name: "Adm. Clientes", path: "."}, {name: "Adm. Clientes", path: "."}]
    },
    { name: "Creditos", 
      options: [{name: "Desembolso de Creditos", path: "."}, {name: "Consulta de Creditos", path: "."}]
    },
    { name: "Operaciones", 
      options: [{name: "Pago de Cuotas", path: "."}, {name: "Extorno de Cuotas", path: "."}]
    },
  ];


  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService) {
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
    return this.authService.getAuth();
  }
}

