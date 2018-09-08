import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaNaturalService } from '../../services/persona-natural.service';
import { PersonaNatural } from '../../models/PersonaNatural';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-persona-natural',
  templateUrl: './update-persona-natural.component.html',
  styleUrls: ['./update-persona-natural.component.css']
})
export class UpdatePersonaNaturalComponent implements OnInit {
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
    id: null,
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personaNaturalService: PersonaNaturalService,
  ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.personaNaturalService.findPersonaNaturalById(id)
      .subscribe(
        personaNatural => { 
          this.personaNatural = personaNatural;
        }
    );
    
  }
  onSubmit({value, valid}: {value: PersonaNatural, valid: boolean}) {
    if (valid) {
      this.personaNaturalService.updatePersonaNatural(this.personaNatural.id, this.personaNatural)
      .subscribe(
        personaNatural => {
          console.log(personaNatural);
        }
      )
    }
  }


}
