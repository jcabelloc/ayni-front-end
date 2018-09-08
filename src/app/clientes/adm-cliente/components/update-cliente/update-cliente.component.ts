import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {
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
  constructor(    private route: ActivatedRoute, private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.clienteService.findClienteById(id)
      .subscribe(
        cliente => { 
          this.cliente = cliente;
        }
    );
  }

  onSubmit({value, valid}: {value: Cliente, valid: boolean}) {
    if (valid) {
      this.clienteService.updateCliente(this.cliente.id, this.cliente)
      .subscribe(
        cliente => {
          console.log(cliente);
        }
      )
    }
  }

}
