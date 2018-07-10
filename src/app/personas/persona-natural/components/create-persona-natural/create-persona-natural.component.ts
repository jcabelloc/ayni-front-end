import { Component, OnInit } from '@angular/core';
import { PersonaNatural } from '../../models/PersonaNatural';
import { PersonaNaturalService } from '../../services/persona-natural.service';


export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-persona-natural',
  templateUrl: './create-persona-natural.component.html',
  styleUrls: ['./create-persona-natural.component.css']
})
export class CreatePersonaNaturalComponent implements OnInit {
  sexos: Option[] = [
    {value: 'HOMBRE', viewValue: 'Hombre'},
    {value: 'MUJER', viewValue: 'Mujer'},
  ];
  civilEstados: Option[] = [
    {value: 'SOLTERO', viewValue: 'Soltero'},
    {value: 'CASADO', viewValue: 'Casado'},
  ];

  tipoDocs: Option[] = [
    {value: 'DNI', viewValue: 'DNI'}
  ];

  personaNatural : PersonaNatural = {
    tipoIdentificacion: "DNI",
    nroIdentificacion: "",
    primerNombre: "",
    segundoNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    sexo: "",
    fechaNacimiento: "",
	  email: "",
	  estadoCivil: "",
  }

  constructor(private personaNaturalService: PersonaNaturalService) { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: PersonaNatural, valid: boolean}) {
    this.personaNaturalService.create(this.personaNatural);
  }

}
