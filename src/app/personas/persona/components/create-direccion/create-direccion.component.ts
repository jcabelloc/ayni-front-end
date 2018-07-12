import { Component, OnInit, Inject } from '@angular/core';
import { Direccion } from '../../models/Direccion';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DireccionService } from '../../services/direccion.service';

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
    {value: 'LIMA', viewValue: 'Lima'},
    {value: 'ICA', viewValue: 'Ica'},
  ];
  provincias: Option[] = [
    {value: 'LIMA', viewValue: 'Lima'},
    {value: 'ICA', viewValue: 'Ica'},
  ];

  distritos: Option[] = [
    {value: 'ANCON', viewValue: 'Ancon'},
    {value: 'OCUCAJE', viewValue: 'Ocucaje'},
  ];

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

  constructor(
    private direccionService: DireccionService,
    public dialogRef: MatDialogRef<CreateDireccionComponent>,
    @Inject(MAT_DIALOG_DATA) public idPersona: number) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit({value, valid}: {value: Direccion, valid: boolean}) {
    this.direccionService.createDireccion(this.idPersona, this.direccion)
      .subscribe (
        direccion => { 
          console.log(direccion);
          //this.router.navigate(['personas/persona-natural/update/' + personaNatural.id]); 
        },
        err => console.log(err)
      );
      
  }

}
