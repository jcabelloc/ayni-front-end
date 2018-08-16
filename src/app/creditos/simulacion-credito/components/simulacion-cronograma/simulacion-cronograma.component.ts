import { Component, OnInit, Input } from '@angular/core';
import { SimulacionCreditoService } from '../../services/simulacion-credito.service';
import { DesembolsoCredito } from '../../../../operaciones/creditos/desembolso-credito/models/DesembolsoCredito';

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
  desembolsoCredito: DesembolsoCredito;

  dataTable: TableElement[];

  displayedColumns: string[] = ['nroCuota', 'fechaVencimiento', 'saldoCapital', 'capital', 'interes', 'montoCuota'];

  constructor(private simulacionCreditoService: SimulacionCreditoService) { }

  ngOnInit() {

  }
  ngOnChanges(){
    if (this.isComplete(this.desembolsoCredito)) {
      this.simulacionCreditoService.getSimulacionCronograma(this.desembolsoCredito)
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

  isComplete(desembolsoCredito: DesembolsoCredito): boolean {
    if (desembolsoCredito === undefined) return false;
    if (desembolsoCredito.fechaDesembolso && desembolsoCredito.montoDesembolso && desembolsoCredito.fechaPrimeraCuota && 
        desembolsoCredito.frecuencia && desembolsoCredito.nroCuotas && desembolsoCredito.tem) {
      return true;
    }
    return false;
  }

}
