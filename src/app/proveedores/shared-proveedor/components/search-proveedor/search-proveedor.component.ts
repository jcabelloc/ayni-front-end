import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef } from '@angular/material';
import { ProveedorService } from '../../../adm-proveedor/services/proveedor.service';


interface TableElement {
  posicion: number;
  tipoPersona: string;
  nombre: string;
  tipoIdentificacion: string;
  nroIdentificacion: string;
  id: number;
}

interface Option {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-search-proveedor',
  templateUrl: './search-proveedor.component.html',
  styleUrls: ['./search-proveedor.component.css']
})
export class SearchProveedorComponent implements OnInit {
  data: TableElement[]= new Array(); 
  displayedColumns: string[] = ['posicion', 'tipoPersona', 'nombre', 'tipoIdentificacion', 'nroIdentificacion', 'mas'];
  dataSource = new MatTableDataSource<TableElement>(this.data);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  options: Option[] = [
    {value: 'NOMBRE', viewValue: 'Nombre'},
    {value: 'DNI', viewValue: 'DNI'},
    // {value: 'RUC', viewValue: 'RUC'},
  ];

  option: string = "NOMBRE";
  searchInput: string;
  
  constructor(private proveedorService: ProveedorService, public dialogRef: MatDialogRef<SearchProveedorComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit({value, valid}: {value: any, valid: boolean}){
    this.proveedorService.findProveedoresBy(value.option, value.searchInput)
      .subscribe(
        proveedores => {
          this.data = [];
          let posicion = 0;
          proveedores.forEach(
            e => {
              posicion = posicion + 1;
              this.data.push({posicion: posicion, tipoPersona: e.tipoPersona, nombre: e.nombre, tipoIdentificacion: e.tipoIdentificacion, 
                nroIdentificacion: e.nroIdentificacion, id: e.id});
            }
          );
        this.dataSource.data = this.data
        },
        err => console.log(err)
      );
  }

  selectProveedor(e) {
    this.dialogRef.close(e.target.id);
  }

}
