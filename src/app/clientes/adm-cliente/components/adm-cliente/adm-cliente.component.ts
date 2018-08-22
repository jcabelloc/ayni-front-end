import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PersonaNaturalService } from '../../../../personas/persona-natural/services/persona-natural.service';

export interface TableElement {
  posicion: number;
  nombre: string;
  tipoIdentificacion: string;
  nroIdentificacion: string;
  esCliente: string;
  id: number;
}

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-adm-cliente',
  templateUrl: './adm-cliente.component.html',
  styleUrls: ['./adm-cliente.component.css']
})
export class AdmClienteComponent implements OnInit {
  data: TableElement[]= new Array(); 
  displayedColumns: string[] = ['posicion', 'nombre', 'tipoIdentificacion', 'nroIdentificacion', 'esCliente', 'mas'];
  dataSource = new MatTableDataSource<TableElement>(this.data);

  options: Option[] = [
    {value: 'NOMBRE', viewValue: 'Nombre'},
    {value: 'DNI', viewValue: 'DNI'},
  ];

  option: string;
  searchInput: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private personaNaturalService: PersonaNaturalService) { }

  ngOnInit() {
    this.personaNaturalService.findFirstNumberOfExtensionPersonasNaturales(100)
    .subscribe(
      personasNaturales => {
        let posicion = 0;
        personasNaturales.forEach(
          e => {
            posicion = posicion + 1;
            this.data.push({posicion : posicion, nombre : e.nombre, tipoIdentificacion: e.tipoIdentificacion, 
              nroIdentificacion: e.nroIdentificacion, esCliente: e.idCliente==null?'No':'Si', id: e.id});
          }
        );
        this.dataSource.data = this.data
      },
      err => console.log(err)
    )
  this.dataSource.paginator = this.paginator;
  }
  
  onSubmit({value, valid}: {value: any, valid: boolean}){
    this.personaNaturalService.findExtensionPersonasNaturalesBy(value.option, value.searchInput)
      .subscribe(
        personasNaturales => {
          this.data = [];
          let posicion = 0;
          personasNaturales.forEach(
            e => {
              posicion = posicion + 1;
              this.data.push({posicion : posicion, nombre : e.nombre, tipoIdentificacion: e.tipoIdentificacion, 
                nroIdentificacion: e.nroIdentificacion, esCliente: e.idCliente==null?'No':'Si', id: e.id});

            }
          );
        this.dataSource.data = this.data
        },
        err => console.log(err)
      );
  }
  

}
