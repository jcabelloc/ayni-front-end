import { Component, OnInit, Input } from '@angular/core';
import { SimulacionCreditoService } from '../../services/simulacion-credito.service';
import { SimulacionCredito } from '../../models/SimulacionCredito';

interface TableElement {
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
  simulacionCredito: SimulacionCredito;

  dataTable: TableElement[];

  displayedColumns: string[] = ['nroCuota', 'fechaVencimiento', 'saldoCapital', 'capital', 'interes', 'montoCuota'];

  constructor(private simulacionCreditoService: SimulacionCreditoService) { }

  ngOnInit() {
 
  }
  ngOnChanges(){
    if (this.isComplete(this.simulacionCredito)) {
      this.simulacionCreditoService.calculateCuotas(this.simulacionCredito)
      .subscribe(
        cuotasCredito => {
          this.dataTable = [];
          cuotasCredito.filter(e => e.nroCuota > 0).forEach(
            e => {
              this.dataTable.push({  nroCuota: e.nroCuota, fechaVencimiento: e.fechaVencimiento, saldoCapital: e.capitalCredito, capital: e.capitalProgramado, interes: e.interesProgramado, montoCuota: e.montoCuota});
            }
          );
        },
        err => console.log(err)
      );
    }
  }

  isComplete(simulacionCredito: SimulacionCredito): boolean {
    if (simulacionCredito === undefined) return false;
    if (simulacionCredito.fechaDesembolso && simulacionCredito.montoDesembolso && simulacionCredito.fechaPrimeraCuota && 
      simulacionCredito.frecuencia && simulacionCredito.nroCuotas && simulacionCredito.tem) {
      return true;
    }
    return false;
  }

}
