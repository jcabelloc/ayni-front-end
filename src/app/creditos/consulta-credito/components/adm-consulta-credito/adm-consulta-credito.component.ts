import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultaCreditoService } from '../../services/consulta-credito.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

interface Option {
  value: string;
  viewValue: string;
}

interface TableElement {
  posicion: number;
  idCuenta: number;
  saldoCapital: number;
  nombre: string;
  tipoIdentificacion: string;
  nroIdentificacion: string;
}

@Component({
  selector: 'app-adm-consulta-credito',
  templateUrl: './adm-consulta-credito.component.html',
  styleUrls: ['./adm-consulta-credito.component.css']
})
export class AdmConsultaCreditoComponent implements OnInit {
  data: TableElement[]= new Array(); 
  displayedColumns: string[] = ['posicion', 'idCuenta', 'nombre', 'tipoIdentificacion', 'nroIdentificacion', 'saldoCapital', 'mas'];
  dataSource = new MatTableDataSource<TableElement>(this.data);
  
  options: Option[] = [
    {value: 'CUENTA', viewValue: 'Nro. Cuenta'},
    {value: 'DNI', viewValue: 'DNI Cliente'},
  ];
  
  option: string;
  searchInput: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private consultaCreditoService: ConsultaCreditoService) { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: any, valid: boolean}){
    if (value.option == "CUENTA") {
      this.consultaCreditoService.findCreditoById(value.searchInput)
        .subscribe(
          cred => {
            this.data = [];
            if (cred != null) {
              this.data.push({
                posicion : 1, 
                idCuenta: cred.idCuenta, 
                saldoCapital: cred.saldoCapital,
                nombre: cred.cliente.nombre, 
                tipoIdentificacion: cred.cliente.tipoIdentificacion,
                nroIdentificacion: cred.cliente.nroIdentificacion
              });
            }
            this.dataSource.data = this.data
          },
          err => console.log(err)
        );
    } else if(value.option == "DNI"){
      this.consultaCreditoService.findCreditosBy(value.option, value.searchInput)
        .subscribe(
          creditos => {
            this.data = [];
            if (creditos.length > 0) {
              let pos = 0;
              creditos.forEach( 
                cred => {
                  pos = pos + 1;
                  this.data.push({
                    posicion : pos, 
                    idCuenta: cred.idCuenta, 
                    saldoCapital: cred.saldoCapital,
                    nombre: cred.cliente.nombre, 
                    tipoIdentificacion: cred.cliente.tipoIdentificacion,
                    nroIdentificacion: cred.cliente.nroIdentificacion
                  });
              })
            }
          this.dataSource.data = this.data
          },
          err => console.log(err)

        )
    }

  }
}
