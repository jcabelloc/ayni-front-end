import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';


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

  cliente : Cliente = {
    personaNatural : {
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
  }
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Cliente, valid: boolean}) {
    this.clienteService.createCliente(this.cliente)
      .subscribe (
        cliente => { 
          console.log(cliente);
          // TODO Change to Update Cliente Path
          this.router.navigate(['clientes/adm-cliente/adm']); 
        },
        err => console.log(err)
      );
      
  }
}