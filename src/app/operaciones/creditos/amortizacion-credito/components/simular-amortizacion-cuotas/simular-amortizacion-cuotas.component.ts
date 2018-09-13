import { Component, OnInit, Input } from '@angular/core';
import { SimulacionAmortizacion } from '../../models/SimulacionAmortizacion';
import { AmortizacionCreditoService } from '../../services/amortizacion-credito.service';

export interface TableElement {
  nroCuota: number;
  fechaVencimiento: string;
  saldoCapital: number;
  saldoInteres: number;
  saldoCuota: number;
  amortizacionCapital: number;
  amortizacionInteres: number;
  nuevoSaldoCapital: number;
  nuevoSaldoInteres: number;
  nuevoSaldoCuota: number;
}


@Component({
  selector: 'app-simular-amortizacion-cuotas',
  templateUrl: './simular-amortizacion-cuotas.component.html',
  styleUrls: ['./simular-amortizacion-cuotas.component.css']
})
export class SimularAmortizacionCuotasComponent implements OnInit {
  @Input()  
  simulacionAmortizacion: SimulacionAmortizacion;

  dataTable: TableElement[] = [];

  displayedColumns: string[] = ['nroCuota', 'fechaVencimiento', 'saldoCapital', 'saldoInteres',
        'saldoCuota', 'amortizacionCapital', 'amortizacionInteres', 'nuevoSaldoCapital', 'nuevoSaldoInteres','nuevoSaldoCuota'];
  constructor(private amortizacionCreditoService: AmortizacionCreditoService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    
    if (this.simulacionAmortizacion != null) {
      this.amortizacionCreditoService.calculateAmortizacion(this.simulacionAmortizacion)
      .subscribe(
        amortizacionesCuotas => {
          console.log(amortizacionesCuotas);
          this.dataTable = [];
          amortizacionesCuotas.forEach(
            e => {
              this.dataTable.push({
                nroCuota: e.nroCuota,
                fechaVencimiento: e.fechaVencimiento,
                saldoCapital: e.capitalProgramado - e.capitalPagado,
                saldoInteres: e.interesProgramado - e.interesPagado,
                saldoCuota: e.capitalProgramado - e.capitalPagado + e.interesProgramado - e.interesPagado,
                amortizacionCapital: e.amortizacionCapital,
                amortizacionInteres: e.amortizacionInteres,
                nuevoSaldoCapital: e.capitalProgramado - e.capitalPagado - e.amortizacionCapital,
                nuevoSaldoInteres: e.interesProgramado - e.interesPagado - e.amortizacionInteres,
                nuevoSaldoCuota: e.capitalProgramado - e.capitalPagado - e.amortizacionCapital + e.interesProgramado - e.interesPagado - e.amortizacionInteres 
              })
            }
          )
        },
        err => console.log(err)
      )

    }
  }

  getTotalAmortizacionCapital() {
    return this.dataTable.map(t => t.amortizacionCapital).reduce((acc, value) => acc + value, 0);
  }
  getTotalAmortizacionInteres() {
    return this.dataTable.map(t => t.amortizacionInteres).reduce((acc, value) => acc + value, 0);
  }

}
