import { Component, OnInit, Input } from '@angular/core';
import { ConsultaCreditoService } from '../../services/consulta-credito.service';

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
  selector: 'app-show-cronograma',
  templateUrl: './show-cronograma.component.html',
  styleUrls: ['./show-cronograma.component.css']
})
export class ShowCronogramaComponent implements OnInit {
  @Input() idCuenta: number;
  dataTable: TableElement[];
  displayedColumns: string[] = ['nroCuota', 'fechaVencimiento', 'capitalCredito', 'capitalProgramado',
  'interesProgramado', 'capitalPagado', 'interesPagado', 'saldoCapital', 'saldoInteres','saldoCuota'];


  constructor(private consultaCreditoService: ConsultaCreditoService) { }

  ngOnInit() {
    this.consultaCreditoService.findAllCuotasByIdCuenta(this.idCuenta)
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
              saldoCapital: Number((e.capitalProgramado - e.capitalPagado).toFixed(2)),
              saldoInteres: Number((e.interesProgramado - e.interesPagado).toFixed(2)),
              saldoCuota: Number((e.capitalProgramado - e.capitalPagado + e.interesProgramado - e.interesPagado).toFixed(2)),
            });
          }
        );
      },
      err => console.log(err)
    );
  }

}
