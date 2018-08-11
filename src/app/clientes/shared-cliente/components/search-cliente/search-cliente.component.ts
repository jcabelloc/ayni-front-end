import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialogRef } from '@angular/material';
import { ClienteService } from '../../../adm-cliente/services/cliente.service';

export interface TableElement {
  posicion: number;
  nombre: string;
  tipoIdentificacion: string;
  nroIdentificacion: string;
  id: number;
}

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-cliente',
  templateUrl: './search-cliente.component.html',
  styleUrls: ['./search-cliente.component.css']
})
export class SearchClienteComponent implements OnInit {
  data: TableElement[]= new Array(); 
  displayedColumns: string[] = ['posicion', 'nombre', 'tipoIdentificacion', 'nroIdentificacion', 'mas'];
  dataSource = new MatTableDataSource<TableElement>(this.data);


  option: string;
  searchInput: string;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  options: Option[] = [
    {value: 'NOMBRE', viewValue: 'Nombre'},
    {value: 'DNI', viewValue: 'DNI'},
  ];

  constructor(private clienteService: ClienteService, public dialogRef: MatDialogRef<SearchClienteComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit({value, valid}: {value: any, valid: boolean}){
    this.clienteService.findClientesBy(value.option, value.searchInput)
      .subscribe(
        clientes => {
          console.log(clientes);
          this.data = [];
          let posicion = 0;
          clientes.forEach(
            e => {
              posicion = posicion + 1;
              this.data.push({posicion: posicion, nombre: e.personaNatural.nombre, tipoIdentificacion: e.personaNatural.tipoIdentificacion, 
                nroIdentificacion: e.personaNatural.nroIdentificacion, id: e.id});
            }
          );
        this.dataSource.data = this.data
        },
        err => console.log(err)
      );
  }

  selectCliente(e) {
    this.dialogRef.close(e.target.id);
  }
  

}



