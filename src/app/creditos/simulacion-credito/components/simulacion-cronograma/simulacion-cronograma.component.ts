import { Component, OnInit } from '@angular/core';

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

  dataTable: TableElement[] = [
    {  nroCuota: 1, fechaVencimiento: '03/10/2018', saldoCapital: 1000, capital: 250, interes: 50, montoCuota: 300},
    {  nroCuota: 2, fechaVencimiento: '04/10/2018', saldoCapital: 750, capital: 250, interes: 50, montoCuota: 300},
    {  nroCuota: 3, fechaVencimiento: '05/11/2018', saldoCapital: 500, capital: 250, interes: 50, montoCuota: 300},
    {  nroCuota: 4, fechaVencimiento: '06/12/2018', saldoCapital: 250, capital: 250, interes: 50, montoCuota: 300},



  ]; 
  displayedColumns: string[] = ['nroCuota', 'fechaVencimiento', 'saldoCapital', 'capital', 'interes', 'montoCuota'];

  constructor() { }

  ngOnInit() {
  }

}
