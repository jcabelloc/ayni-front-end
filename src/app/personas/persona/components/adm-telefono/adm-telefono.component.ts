import { Component, OnInit, Input } from '@angular/core';
import { TelefonoService } from '../../services/telefono.service';
import { Telefono } from '../../models/Telefono';
import { CreateTelefonoComponent } from '../create-telefono/create-telefono.component';
import { MatDialog } from '@angular/material';

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


  constructor(private telefonoService : TelefonoService, private dialog: MatDialog) { }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTelefonoComponent, {
      width: '400px',
      data: this.idPersona
    });

    dialogRef.afterClosed().subscribe(isCreated => {
      if (isCreated) {
        this.ngOnChanges();
      }
    });
  }

}
