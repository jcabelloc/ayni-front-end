import { Component, OnInit, Input } from '@angular/core';
import { CreateDireccionComponent } from '../create-direccion/create-direccion.component';
import { MatDialog } from '@angular/material';
import { Direccion } from '../../models/Direccion';
import { DireccionService } from '../../services/direccion.service';


@Component({
  selector: 'app-adm-direccion',
  templateUrl: './adm-direccion.component.html',
  styleUrls: ['./adm-direccion.component.css']
})
export class AdmDireccionComponent implements OnInit {
  @Input()  
  idPersona: number;

  displayedColumns: string[] = ['tipo', 'ubigeo', 'direccion'];

  dataDireccion : Direccion[];

  constructor(private direccionService: DireccionService, public dialog: MatDialog) { }

  ngOnInit() {

  }
  ngOnChanges(){
    if (this.idPersona != null) {
      this.direccionService.findAllDireccionesByIdPersona(this.idPersona)
      .subscribe(
        direcciones => {
          this.dataDireccion = direcciones;
          this.dataDireccion.map(e => {
            e.direccion = [e.tipoVia, e.nombreVia, e.numeroVia, e.tipoLocalidad, e.nombreLocalidad, e.manzana, e.lote, e.interior]
                    .filter(Boolean).join(" ").substr(0, 40);
          })
        },
        err => console.log(err)
      );
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateDireccionComponent, {
      width: '800px',
      data: this.idPersona
    });

    dialogRef.afterClosed().subscribe(isCreated => {
      if (isCreated) {
        this.ngOnChanges();
      }
    });
  }
}
