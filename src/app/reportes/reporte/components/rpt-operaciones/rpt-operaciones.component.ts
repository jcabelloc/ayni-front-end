import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rpt-operaciones',
  templateUrl: './rpt-operaciones.component.html',
  styleUrls: ['./rpt-operaciones.component.css']
})
export class RptOperacionesComponent implements OnInit {
  readonly reporteUrl: string = environment.reporteUrl;
  desde: string;
  hasta: string;
  tipoOperacion: string = '';
  tiposOperacion: Option[] = [
    {value: 'DESEMBOLSO_CRED', viewValue: 'Desembolsos'}, 
    {value: 'AMORTIZACION_CRED', viewValue: 'Amortizaciones'},
    {value: 'GASTO_ADM', viewValue: 'Gastos Adm.'},
    {value: 'HABILITACION_CAJA', viewValue: 'Habilitacion de Caja'},
    {value: 'REMESA_BANCO', viewValue: 'Remesa a Banco '},
    {value: 'TODOS', viewValue: 'Todos'},
  ];
  // DESEMBOLSO_CRED, AMORTIZACION_CRED, GASTO_ADM, HABILITACION_CAJA, REMESA_BANCO, APORTE_CAPITAL

  constructor() { }

  ngOnInit() {
    this.desde = this.getStringLocalDate(new Date());
    this.hasta = this.getStringLocalDate(new Date());
  }

  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }
  onSubmit({value, valid}: {value: any, valid: boolean}) {
    if (valid) {
      this.tipoOperacion = this.tipoOperacion == 'TODOS'? '':this.tipoOperacion;
      let rptUrl = this.reporteUrl + "operaciones?tipoOperacion=" + this.tipoOperacion + 
      "&desde=" + this.desde  + "&hasta=" + this.hasta;
      console.log(rptUrl);
      window.open(rptUrl);
    }
  }

}
