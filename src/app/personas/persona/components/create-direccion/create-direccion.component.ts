import { Component, OnInit } from '@angular/core';
import { Direccion } from '../../models/Direccion';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-direccion',
  templateUrl: './create-direccion.component.html',
  styleUrls: ['./create-direccion.component.css']
})
export class CreateDireccionComponent implements OnInit {
  departamentos: Option[] = [
    {value: 'HOMBRE', viewValue: 'Hombre'},
    {value: 'MUJER', viewValue: 'Mujer'},
  ];
  provincias: Option[] = [
    {value: 'SOLTERO', viewValue: 'Soltero'},
    {value: 'CASADO', viewValue: 'Casado'},
  ];

  distritos: Option[] = [
    {value: 'DNI', viewValue: 'DNI'}
  ];

  tipoVias: Option[] = [
    {value: 'SOLTERO', viewValue: 'Soltero'},
    {value: 'CASADO', viewValue: 'Casado'},
  ];

  tipoLocalidades: Option[] = [
    {value: 'SOLTERO', viewValue: 'Soltero'},
    {value: 'CASADO', viewValue: 'Casado'},
  ];

  direccion: Direccion = {
    tipo: "",
    departamento: "",
    provincia: "",
    distrito: "",
    tipoVia: "",
    nombreVia: "",
    numeroVia: "",
    tipoLocalidad: "",
    nombreLocalidad: "",
    manzana: "",
    lote: "",
    interior: "",
    referencia: "",
}

  constructor() { }

  ngOnInit() {
  }

}
