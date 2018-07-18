import { Component, OnInit, Input } from '@angular/core';
import { TelefonoService } from '../../services/telefono.service';
import { CreateTelefonoComponent } from '../create-telefono/create-telefono.component';
import { MatDialog } from '@angular/material';

export interface TableElement {
  posicion: number;
  tipo: string;
  numero: string;
  id: number;
}


@Component({
  selector: 'app-adm-telefono',
  templateUrl: './adm-telefono.component.html',
  styleUrls: ['./adm-telefono.component.css']
})
export class AdmTelefonoComponent implements OnInit {

  dataTable: TableElement[]; 

  @Input()
  idPersona: number;

  displayedColumns: string[] = ['posicion', 'tipo', 'numero', 'mas'];

  constructor(private telefonoService : TelefonoService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.idPersona != null) {
      this.telefonoService.findAllTelefonosByIdPersona(this.idPersona)
        .subscribe(
          telefonos => {
            this.dataTable = [];
            let posicion = 0;
            telefonos.forEach(e => {
              posicion++;
              this.dataTable.push({posicion: posicion, tipo: e.tipo, numero: e.codTelefonicoDpto+"-"+e.numero, id: e.id });
            });
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
  delete(element: TableElement){
    this.telefonoService.deleteTelefono(this.idPersona, element.id)
      .subscribe(
        response => {
          this.ngOnChanges();
        },
        err => console.log(err)
      );
  }

}
