import { Component, OnInit, Input } from '@angular/core';
import { DatosSimulacionAmortizacion } from '../../models/DatosSimulacionAmortizacion';
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
  datosSimulacionAmortizacion: DatosSimulacionAmortizacion;

  dataTable: TableElement[];

  displayedColumns: string[] = ['nroCuota', 'fechaVencimiento', 'saldoCapital', 'saldoInteres',
        'saldoCuota', 'amortizacionCapital', 'amortizacionInteres', 'nuevoSaldoCapital', 'nuevoSaldoInteres','nuevoSaldoCuota'];
  constructor(private amortizacionCreditoService: AmortizacionCreditoService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.amortizacionCreditoService.calculateAmortizacion(this.datosSimulacionAmortizacion)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      )
  }

}
