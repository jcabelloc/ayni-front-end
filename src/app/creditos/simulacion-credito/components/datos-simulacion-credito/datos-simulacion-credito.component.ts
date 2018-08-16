import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { DesembolsoCredito } from '../../../../operaciones/creditos/desembolso-credito/models/DesembolsoCredito';

export interface Option {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-datos-simulacion-credito',
  templateUrl: './datos-simulacion-credito.component.html',
  styleUrls: ['./datos-simulacion-credito.component.css']
})
export class DatosSimulacionCreditoComponent implements OnInit {
  desembolsoCredito: DesembolsoCredito = {
    montoDesembolso: null,
    moneda: '1',
    frecuencia: null,
    tem: null,
    nroCuotas: null,
    fechaDesembolso: null,
    fechaPrimeraCuota: null
  };

  desembolsoCreditoForChild: DesembolsoCredito;

  frecuencias: Option[] = [
    {value: 'SEMANAL', viewValue: 'Semanal'},
    {value: 'MENSUAL', viewValue: 'Mensual'},
    {value: 'DIARIA', viewValue: 'Diaria'},
  ];

  constructor() { }

  ngOnInit() {
    this.desembolsoCredito.tem = 14.5;
    this.desembolsoCredito.frecuencia = 'SEMANAL';
    this.desembolsoCredito.fechaDesembolso = this.getStringLocalDate(new Date());
    this.setFechaPrimeraCuota(this.desembolsoCredito.fechaDesembolso, this.desembolsoCredito.frecuencia);
  }

  onFrecuenciaSelection(frecuencia: MatSelectChange) {
    this.setFechaPrimeraCuota(this.desembolsoCredito.fechaDesembolso, this.desembolsoCredito.frecuencia);
  }

  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }

  onFechaDesembolsoBlur() {
    this.setFechaPrimeraCuota(this.desembolsoCredito.fechaDesembolso, this.desembolsoCredito.frecuencia);
  }

  setFechaPrimeraCuota(fechaDesembolso: string, frecuencia: string) {

    let fechaDesembolsoDate = new Date();
    fechaDesembolsoDate.setDate(+fechaDesembolso.split("-")[2]);
    fechaDesembolsoDate.setMonth(+fechaDesembolso.split("-")[1] - 1);
    fechaDesembolsoDate.setFullYear(+fechaDesembolso.split("-")[0]);
    let fechaPrimeraCuotaDate = new Date(fechaDesembolsoDate.valueOf());
    switch(frecuencia) {
      case 'MENSUAL': 
      { 
        fechaPrimeraCuotaDate.setMonth(fechaDesembolsoDate.getMonth() + 1);
        break;
      }
      case 'SEMANAL': 
      { 
        fechaPrimeraCuotaDate.setDate(fechaDesembolsoDate.getDate() + 7);
        break;
      }
      case 'DIARIA': 
      { 
        fechaPrimeraCuotaDate.setDate(fechaDesembolsoDate.getDate() + 1);
        break;
      }
    }
    this.desembolsoCredito.fechaPrimeraCuota = this.getStringLocalDate(fechaPrimeraCuotaDate);
  }

  onSubmit() {
     
    this.desembolsoCreditoForChild = {
      montoDesembolso: this.desembolsoCredito.montoDesembolso,
      moneda: this.desembolsoCredito.moneda,
      frecuencia: this.desembolsoCredito.frecuencia,
      tem: this.desembolsoCredito.tem,
      nroCuotas: this.desembolsoCredito.nroCuotas,
      fechaDesembolso: this.desembolsoCredito.fechaDesembolso,
      fechaPrimeraCuota: this.desembolsoCredito.fechaPrimeraCuota,
    };
  }


}
