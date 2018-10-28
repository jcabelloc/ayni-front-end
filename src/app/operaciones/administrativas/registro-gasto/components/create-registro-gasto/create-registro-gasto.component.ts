import { Component, OnInit } from '@angular/core';

export interface Option {
  value: string;
  viewValue: string;
}

export interface Proveedor {
  tipoIdentificacion: string;
  nroIdentificacion: string;
  nombre: string;
  cuenta: string;
}

export interface Gasto {
  rubro: string,
  nota: string,
}


@Component({
  selector: 'app-create-registro-gasto',
  templateUrl: './create-registro-gasto.component.html',
  styleUrls: ['./create-registro-gasto.component.css']
})
export class CreateRegistroGastoComponent implements OnInit {
  
  proveedor: Proveedor = {
    tipoIdentificacion: 'RUC',
    nroIdentificacion: '2003728693',
    nombre: 'LINDLEY SAC',
    cuenta: '',
  };
  gasto: Gasto = {
    rubro: '',
    nota: '',
  }
  rubros: Option[] = [
    {value: 'HONORARIOS', viewValue: 'Honorarios'},
    {value: 'ALQUILERES', viewValue: 'Alquileres'},
    {value: 'SUMINISTROS_DIVERSOS', viewValue: 'Suministros Diversos'},
    {value: 'COMUNICACIONES', viewValue: 'Comunicaciones'},
    {value: 'REPARACION_MANTENIMIENTO', viewValue: 'Reparacion y Mantenimiento'},
    {value: 'OTROS_SERVICIOS', viewValue: 'Otros Servicios'},
  ];

  tipoDocs: Option[] = [
    {value: 'DNI', viewValue: 'DNI'},
    {value: 'RUC', viewValue: 'RUC'},
  ];

  cuentas: Option[] = [
    {value: '10000053', viewValue: '10000053'},
    {value: '10000189', viewValue: '10000189'},
  ];

  autorizadores: Option[] = [
    {value: 'GRIOS', viewValue: 'grios'},
    {value: 'EPEREZ', viewValue: 'eperez'},
    {value: 'MFERNANDEZ', viewValue: 'mfernandez'},
    {value: 'JCABELLOC', viewValue: 'jcabelloc'},
  ];

  
  tiposCuentaEgreso: Option[] = [
    {value: 'CAJA', viewValue: 'CAJA'},
    {value: 'BANCOS', viewValue: 'BANCOS'},
  ];

  cuentasEgreso: Option[] = [
    {value: '10000053', viewValue: '10000053'},
    {value: '10000189', viewValue: '10000189'},
  ];
  isRecaudoBanco: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
