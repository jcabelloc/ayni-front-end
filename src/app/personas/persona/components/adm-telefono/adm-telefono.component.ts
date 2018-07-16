import { Component, OnInit, Input } from '@angular/core';
import { TelefonoService } from '../../services/telefono.service';
import { Telefono } from '../../models/Telefono';

@Component({
  selector: 'app-adm-telefono',
  templateUrl: './adm-telefono.component.html',
  styleUrls: ['./adm-telefono.component.css']
})
export class AdmTelefonoComponent implements OnInit {

  @Input()
  idPersona: number;

  dataTelefono: Telefono[];

  displayedColumns: string[] = ['tipo', 'numero'];


  constructor(private telefonoService : TelefonoService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.idPersona != null) {
      this.telefonoService.findAllTelefonosByIdPersona(this.idPersona)
        .subscribe(
          telefonos => {
            this.dataTelefono = telefonos;
          },
          err => console.log(err)
        );
    }
  }

}
