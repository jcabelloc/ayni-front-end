import { Component, OnInit, Input } from '@angular/core';
import { CreateDireccionComponent } from '../create-direccion/create-direccion.component';
import { MatDialog } from '@angular/material';
import { Direccion } from '../../models/Direccion';
import { DireccionService } from '../../services/direccion.service';

export interface Direccion2 {
  direccion: string;
  position: number;
  tipo: string;
  ubigeo: string;
}


const DIRECCION_DATA: Direccion2[] = [
  {position: 1, direccion: 'Jr.Rioja C-01 caserio la union', tipo: 'Casa', ubigeo: 'Nueva Cajamarca/Amazonas'},
  {position: 2, direccion: 'Jr. Santa Isabel C-03 urb. Santa Isabel', tipo: 'Negocio', ubigeo: 'Nueva Cajamarca/Amazonas'},
];

@Component({
  selector: 'app-adm-direccion',
  templateUrl: './adm-direccion.component.html',
  styleUrls: ['./adm-direccion.component.css']
})
export class AdmDireccionComponent implements OnInit {
  @Input()  
  idPersona: number;

  displayedColumns: string[] = ['position', 'tipo', 'direccion', 'ubigeo'];
  direccionDataSource = DIRECCION_DATA;

  dataDireccion : Direccion[];

  constructor(private direccionService: DireccionService, public dialog: MatDialog) { }

  ngOnInit() {
    this.direccionService.findAllDireccionesByIdPersona(this.idPersona)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateDireccionComponent, {
      width: '800px',
      data: this.idPersona
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let mensage = result;
    });
  }
}
