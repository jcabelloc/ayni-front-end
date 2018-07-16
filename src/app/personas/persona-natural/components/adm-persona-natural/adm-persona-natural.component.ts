import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PersonaNaturalService } from '../../services/persona-natural.service';

export interface TableElement {
  posicion: number;
  nombre: string;
  tipoIdentificacion: string;
  nroIdentificacion: string;
}

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-adm-persona-natural',
  templateUrl: './adm-persona-natural.component.html',
  styleUrls: ['./adm-persona-natural.component.css']
})
export class AdmPersonaNaturalComponent implements OnInit {
  data: TableElement[]= new Array(); 
  displayedColumns: string[] = ['posicion', 'nombre', 'tipoIdentificacion', 'nroIdentificacion'];
  dataSource = new MatTableDataSource<TableElement>(this.data);

  criterios: Option[] = [
    {value: 'NOMBRE', viewValue: 'Nombre'},
    {value: 'DNI', viewValue: 'DNI'},
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private personaNaturalService: PersonaNaturalService) { }

  ngOnInit() {
    this.personaNaturalService.findFirstNumberPersonasNaturales(100)
      .subscribe(
        personasNaturales => {
          let posicion = 0;
          personasNaturales.forEach(
            e => {
              posicion = posicion + 1;
              this.data.push({posicion : posicion, nombre : e.nombre, tipoIdentificacion: e.tipoIdentificacion, nroIdentificacion: e.nroIdentificacion });
          }
          );
          this.dataSource.data = this.data
        },
        err => console.log(err)
      )
    this.dataSource.paginator = this.paginator;

  }

}

