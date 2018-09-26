import { Component, OnInit, Inject } from '@angular/core';
import { Direccion } from '../../models/Direccion';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectChange } from '@angular/material';
import { DireccionService } from '../../services/direccion.service';
import { ConfiguracionUbigeo, Departamento, Provincia, Distrito } from '../../models/ConfiguracionUbigeo';

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

  configuracionUbigeo : ConfiguracionUbigeo;

  departamentos : Departamento[];
  departamentoSeleccionado: Departamento;

  provincias: Provincia[];
  provinciaSeleccionada: Provincia;

  distritos: Distrito[];

  tipoVias: Option[] = [
    {value: 'JIRON', viewValue: 'Jiron'},
    {value: 'CALLE', viewValue: 'Calle'},
    {value: 'AVENIDA', viewValue: 'Avenida'},
  ];

  tipoLocalidades: Option[] = [
    {value: 'URB', viewValue: 'Urbanizacion'},
    {value: 'AAHH', viewValue: 'AAHH'},
    {value: 'ASOC_VIVIENDA', viewValue: 'Asoc. Vivienda'},
    {value: 'CASERIO', viewValue: 'Caserio'},
    {value: 'CENTRO_POBLADO', viewValue: 'Centro Poblado'},

  ];

  tipos: Option[] = [
    {value: 'CASA', viewValue: 'Casa'},
    {value: 'NEGOCIO', viewValue: 'Negocio'},
  ];


  direccion: Direccion = {
    tipo: "",
    idUbigeo: null,
    tipoVia: null,
    nombreVia: null,
    numeroVia: null,
    tipoLocalidad: null,
    nombreLocalidad: null,
    manzana: null,
    lote: null,
    interior: null,
    referencia: null,
    idUbigeoDpto: null,
    idUbigeoProvincia: null,
    idUbigeoDistrito: null,
  }

  isCreated: boolean = false;

  constructor(
    private direccionService: DireccionService,
    public dialogRef: MatDialogRef<CreateDireccionComponent>,
    @Inject(MAT_DIALOG_DATA) public idPersona: number) { }

  ngOnInit() {
    this.direccionService.getConfiguracionUbigeo()
      .subscribe (
        config => {
          this.configuracionUbigeo = config;
          this.departamentos = this.configuracionUbigeo.departamentos;
        }
      );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit({value, valid}: {value: Direccion, valid: boolean}) {
    if(valid) {
      this.direccionService.createDireccion(this.idPersona, this.direccion)
      .subscribe (
        direccion => { 
          this.isCreated = true;
          this.dialogRef.close(this.isCreated);
        },
        err => console.log(err)
      );
    }
    
      
  }

  onDptoSelection(dpto: MatSelectChange) {
    this.departamentoSeleccionado = this.departamentos.find(e => e.id == dpto.value); 
    this.provincias = this.departamentoSeleccionado.provincias;
    this.distritos = null;
  }
  onProvinciaSelection(provincia: MatSelectChange) {
    this.provinciaSeleccionada = this.departamentoSeleccionado.provincias.find(e => e.id == provincia.value);
    this.distritos = this.provinciaSeleccionada.distritos;
  }

  onDistritoSelection(distrito: MatSelectChange) {
    this.direccion.idUbigeo = this.direccion.idUbigeoDistrito;
  }
}
