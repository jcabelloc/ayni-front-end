import { Component, OnInit, Input } from '@angular/core';
import { Credito } from '../../models/Credito';
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
  credito: Credito;

  dataTable: TableElement[];

  displayedColumns: string[] = ['nroCuota', 'fechaVencimiento', 'saldoCapital', 'capital', 'interes', 'montoCuota'];

  constructor(private simulacionCreditoService: SimulacionCreditoService) { }

  ngOnInit() {

  }
  ngOnChanges(){
    if (this.isComplete(this.credito)) {
      this.simulacionCreditoService.getSimulacionCronograma(this.credito)
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

  isComplete(credito: Credito): boolean {
    if (credito === undefined) return false;
    if (credito.fechaDesembolso && credito.montoDesembolso && credito.fechaPrimeraCuota && credito.frecuencia && credito.nroCuotas && credito.tem) {
      return true;
    }
    return false;
  }

}
