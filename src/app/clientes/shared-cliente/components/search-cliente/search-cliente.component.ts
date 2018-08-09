import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

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

  constructor() { }

  ngOnInit() {
  }

}



