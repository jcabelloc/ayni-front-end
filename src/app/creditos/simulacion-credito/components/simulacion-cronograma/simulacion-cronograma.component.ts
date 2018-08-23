import { Component, OnInit, Input } from '@angular/core';
import { SimulacionCreditoService } from '../../services/simulacion-credito.service';
import { DatosSimulacionCredito } from '../../models/DatosSimulacionCredito';

export interface TableElement {
  nroCuota: number;
  fechaVencimiento: string;
  saldoCapital: number;
  capital: number;
  interes: number;
  montoCuota: number;
}


@Component({
  selector: 'app-simulacion-cronograma',
  templateUrl: './simulacion-cronograma.component.html',
  styleUrls: ['./simulacion-cronograma.component.css']
})
export class SimulacionCronogramaComponent implements OnInit {
  
  @Input()  
  datosSimulacionCredito: DatosSimulacionCredito;

  dataTable: TableElement[];

  displayedColumns: string[] = ['nroCuota', 'fechaVencimiento', 'saldoCapital', 'capital', 'interes', 'montoCuota'];

  constructor(private simulacionCreditoService: SimulacionCreditoService) { }

  ngOnInit() {
 
  }
  ngOnChanges(){
    if (this.isComplete(this.datosSimulacionCredito)) {
      this.simulacionCreditoService.calculateCronograma(this.datosSimulacionCredito)
      .subscribe(
        cuotasCronogramaCredito => {
          this.dataTable = [];
          cuotasCronogramaCredito.filter(e => e.nroCuota > 0).forEach(
            e => {
              this.dataTable.push({  nroCuota: e.nroCuota, fechaVencimiento: e.fechaVencimiento, saldoCapital: e.capitalCredito, capital: e.capitalProgramado, interes: e.interesProgramado, montoCuota: e.montoCuota});
            }
          );
        },
        err => console.log(err)
      );
    }
  }

  isComplete(datosSimulacionCredito: DatosSimulacionCredito): boolean {
    if (datosSimulacionCredito === undefined) return false;
    if (datosSimulacionCredito.fechaDesembolso && datosSimulacionCredito.montoDesembolso && datosSimulacionCredito.fechaPrimeraCuota && 
      datosSimulacionCredito.frecuencia && datosSimulacionCredito.nroCuotas && datosSimulacionCredito.tem) {
      return true;
    }
    return false;
  }

}
