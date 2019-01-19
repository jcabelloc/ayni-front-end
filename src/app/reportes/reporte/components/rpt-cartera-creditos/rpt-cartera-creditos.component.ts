import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

interface Option {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-rpt-cartera-creditos',
  templateUrl: './rpt-cartera-creditos.component.html',
  styleUrls: ['./rpt-cartera-creditos.component.css']
})
export class RptCarteraCreditosComponent implements OnInit {
  readonly reporteUrl: string = environment.reporteUrl;
  estado: String = 'ACTIVO';
  estados: Option[] = [
    {value: 'ACTIVO', viewValue: 'Activo'}, 
    {value: 'CANCELADO', viewValue: 'Cancelado'},
    {value: 'TODOS', viewValue: 'Todos'},
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    if (valid) {
      this.estado = this.estado == 'TODOS'? '':this.estado;
      let rptUrl = this.reporteUrl + "cartera-creditos?estado=" + this.estado;
      window.open(rptUrl);
    }
  }
}
