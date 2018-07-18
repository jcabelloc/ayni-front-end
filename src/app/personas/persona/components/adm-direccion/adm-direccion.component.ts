import { Component, OnInit, Input } from '@angular/core';
import { CreateDireccionComponent } from '../create-direccion/create-direccion.component';
import { MatDialog } from '@angular/material';
import { DireccionService } from '../../services/direccion.service';

export interface TableElement {
  posicion: number;
  tipo: string;
  ubigeo: string;
  direccion: string;
  id: number;
}


@Component({
  selector: 'app-adm-direccion',
  templateUrl: './adm-direccion.component.html',
  styleUrls: ['./adm-direccion.component.css']
})
export class AdmDireccionComponent implements OnInit {
  
  dataTable: TableElement[]; 

  @Input()  
  idPersona: number;

  displayedColumns: string[] = ['posicion', 'tipo', 'ubigeo', 'direccion', 'mas'];

  constructor(private direccionService: DireccionService, public dialog: MatDialog) { }

  ngOnInit() {

  }
  ngOnChanges(){
    if (this.idPersona != null) {
      this.direccionService.findAllDireccionesByIdPersona(this.idPersona)
      .subscribe(
        direcciones => {
          this.dataTable = [];
          let posicion = 0;
          direcciones.forEach(e => {
            posicion++;
            this.dataTable.push({
              posicion: posicion, tipo: e.tipo, ubigeo: e.distrito+" / "+e.provincia, 
              direccion : [e.tipoVia, e.nombreVia, e.numeroVia, e.tipoLocalidad, e.nombreLocalidad, e.manzana, e.lote, e.interior]
                .filter(Boolean).join(" ").substr(0, 45), 
              id: e.id});
          });
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
  
  delete(element: TableElement){
    this.direccionService.deleteDireccion(this.idPersona, element.id)
      .subscribe(
        response => {
          this.ngOnChanges();
        },
        err => console.log(err)
      );
  }
}
