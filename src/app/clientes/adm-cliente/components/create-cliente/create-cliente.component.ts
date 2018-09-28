import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaNaturalService } from '../../../../personas/persona-natural/services/persona-natural.service';


export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
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
  existPPNN: boolean = false;

  cliente : Cliente = {
    personaNatural : {
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
  }
  constructor(private clienteService: ClienteService, 
              private router: Router, 
              private route: ActivatedRoute,
              private personaNaturalService: PersonaNaturalService ) { }

  ngOnInit() {
    let idPersona = parseInt(this.route.snapshot.paramMap.get('idPersona'));
    if (idPersona) {
      this.existPPNN = true;
      this.personaNaturalService.findPersonaNaturalById(idPersona)
        .subscribe(
          personaNatural => {
            this.cliente.personaNatural = personaNatural;
          },
          err => console.log(err)
        )
    }
  }

  onSubmit({value, valid}: {value: Cliente, valid: boolean}) {
    if (valid) {
      this.clienteService.createCliente(this.cliente)
      .subscribe (
        cliente => { 
          this.router.navigate(['clientes/adm-cliente/update/' + cliente.id]); 
        },
        err => console.log(err)
      );

    }
      
  }
}