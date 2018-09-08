import { Component, OnInit } from '@angular/core';
import { PersonaNatural } from '../../models/PersonaNatural';
import { PersonaNaturalService } from '../../services/persona-natural.service';
import { Router } from '@angular/router';



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
    nroIdentificacion: null,
    primerNombre: null,
    segundoNombre: null,
    apellidoPaterno: null,
    apellidoMaterno: null,
    sexo: null,
    fechaNacimiento: null,
	  email: null,
	  estadoCivil: null,
  }

  constructor(private personaNaturalService: PersonaNaturalService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: PersonaNatural, valid: boolean}) {
    if (valid) {
      this.personaNaturalService.createPersonaNatural(this.personaNatural)
      .subscribe (
        personaNatural => { 
          this.router.navigate(['personas/persona-natural/update/' + personaNatural.id]); 
        },
        err => console.log(err)
      );

    }
    
      
  }

}
