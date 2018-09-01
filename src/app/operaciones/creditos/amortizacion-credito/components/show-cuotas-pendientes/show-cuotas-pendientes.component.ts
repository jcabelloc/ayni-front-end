import { Component, OnInit, Input } from '@angular/core';
import { ConsultaCreditoService } from '../../../../../creditos/consulta-credito/services/consulta-credito.service';

export interface TableElement {
  nroCuota: number;
  fechaVencimiento: string;
  capitalCredito: number;
  capitalProgramado: number;
  interesProgramado: number;
  capitalPagado: number;
  interesPagado: number;
  saldoCapital: number;
  saldoInteres: number;
  saldoCuota: number;
}

@Component({
  selector: 'app-show-cuotas-pendientes',
  templateUrl: './show-cuotas-pendientes.component.html',
  styleUrls: ['./show-cuotas-pendientes.component.css']
})
export class ShowCuotasPendientesComponent implements OnInit {
  @Input()  
  idCuenta: number;

  dataTable: TableElement[];

  displayedColumns: string[] = ['nroCuota', 'fechaVencimiento', 'capitalCredito', 'capitalProgramado',
        'interesProgramado', 'capitalPagado', 'interesPagado', 'saldoCapital', 'saldoInteres','saldoCuota'];
  constructor(private consultaCreditoService: ConsultaCreditoService) { }

  ngOnInit() {
    this.consultaCreditoService.findCuotasByIdCuentaAndEstado(this.idCuenta, "PENDIENTE")
    .subscribe(
      cuotasCredito => {
        console.log(cuotasCredito);
        this.dataTable = [];
        cuotasCredito.forEach(
          e => {
            this.dataTable.push({
              nroCuota: e.nroCuota, 
              fechaVencimiento: e.fechaVencimiento, 
              capitalCredito: e.capitalCredito, 
              capitalProgramado: e.capitalProgramado, 
              interesProgramado: e.interesProgramado,
              capitalPagado: e.capitalPagado, 
              interesPagado: e.interesPagado,
              saldoCapital: e.capitalProgramado - e.capitalPagado,
              saldoInteres: e.interesProgramado - e.interesPagado,
              saldoCuota: e.capitalProgramado - e.capitalPagado + e.interesProgramado - e.interesPagado,
            });
          }
        );
      },
      err => console.log(err)
    );
  }

}
