import { Component, OnInit, Input } from '@angular/core';
import { DatosCredito } from '../../models/DatosCredito';
import { SimulacionCreditoService } from '../../services/simulacion-credito.service';

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
  datosCredito: DatosCredito;

  dataTable: TableElement[];

  displayedColumns: string[] = ['nroCuota', 'fechaVencimiento', 'saldoCapital', 'capital', 'interes', 'montoCuota'];

  constructor(private simulacionCreditoService: SimulacionCreditoService) { }

  ngOnInit() {

  }
  ngOnChanges(){
    if (this.isComplete(this.datosCredito)) {
      this.simulacionCreditoService.getSimulacionCronograma(this.datosCredito)
      .subscribe(
        detallesCronogramaCredito => {
          this.dataTable = [];
          detallesCronogramaCredito.filter(e => e.nroCuota > 0).forEach(
            e => {
              this.dataTable.push({  nroCuota: e.nroCuota, fechaVencimiento: e.fechaVencimiento, saldoCapital: e.saldoCapital, capital: e.capital, interes: e.interes, montoCuota: e.montoCuota});
            }
          );
        },
        err => console.log(err)
      );
    }
  }

  isComplete(datosCredito: DatosCredito): boolean {
    if (datosCredito === undefined) return false;
    if (datosCredito.fechaDesembolso && datosCredito.montoDesembolso && datosCredito.fechaPrimeraCuota && datosCredito.frecuencia && datosCredito.nroCuotas && datosCredito.tem) {
      return true;
    }
    return false;
  }

}
