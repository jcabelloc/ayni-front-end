import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ConsultaCreditoService } from '../../../../../creditos/consulta-credito/services/consulta-credito.service';

interface Option {
  value: string;
  viewValue: string;
}

interface TableElement {
  posicion: number;
  nombre: string;
  tipoIdentificacion: string;
  nroIdentificacion: string;
  id: number;
}


@Component({
  selector: 'app-adm-amortizacion-credito',
  templateUrl: './adm-amortizacion-credito.component.html',
  styleUrls: ['./adm-amortizacion-credito.component.css']
})
export class AdmAmortizacionCreditoComponent implements OnInit {
  data: TableElement[]= new Array(); 
  displayedColumns: string[] = ['posicion', 'idCuenta', 'saldoCapital', 'nombre', 'tipoIdentificacion', 'nroIdentificacion', 'mas'];
  dataSource = new MatTableDataSource<TableElement>(this.data);
  
  options: Option[] = [
    {value: 'CUENTA', viewValue: 'Nro. Cuenta'},
    {value: 'DNI-CLIENTE', viewValue: 'DNI Cliente'},
  ];

  option: string;
  searchInput: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private consultaCreditoService: ConsultaCreditoService) { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: any, valid: boolean}){
    if (value.option == "DNI-CLIENTE") {
      this.consultaCreditoService.findCreditoById(value.searchInput)
        .subscribe(
          credito => {
            //TODO
          },
          err => console.log(err)
        );
    } else if(value.option == "CUENTA"){
      this.consultaCreditoService.findCreditoByDniCliente(value.searchInput);
    }

  }
}
