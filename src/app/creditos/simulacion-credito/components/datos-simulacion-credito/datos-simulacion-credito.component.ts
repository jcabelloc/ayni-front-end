import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { SimulacionCredito } from '../../models/SimulacionCredito';

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
  simulacionCredito: SimulacionCredito = {
    montoDesembolso: null,
    frecuencia: null,
    tem: null,
    nroCuotas: null,
    fechaDesembolso: null,
    fechaPrimeraCuota: null
  };

  frecuencias: Option[] = [
    {value: 'SEMANAL', viewValue: 'SEMANAL'},
    {value: 'MENSUAL', viewValue: 'MENSUAL'},
    {value: 'DIARIA', viewValue: 'DIARIA'},
  ];

  constructor() { }

  ngOnInit() {
    this.simulacionCredito.tem = 12.5;
    this.simulacionCredito.frecuencia = 'SEMANAL';
    this.simulacionCredito.fechaDesembolso = this.getStringLocalDate(new Date());
    this.setFechaPrimeraCuota(this.simulacionCredito.fechaDesembolso, this.simulacionCredito.frecuencia);
  }

  onFrecuenciaSelection(frecuencia: MatSelectChange) {
    this.setFechaPrimeraCuota(this.simulacionCredito.fechaDesembolso, this.simulacionCredito.frecuencia);
  }

  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }

  onFechaDesembolsoBlur() {
    this.setFechaPrimeraCuota(this.simulacionCredito.fechaDesembolso, this.simulacionCredito.frecuencia);
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
    this.simulacionCredito.fechaPrimeraCuota = this.getStringLocalDate(fechaPrimeraCuotaDate);
  }

  onSubmit() {
   this.simulacionCredito = {
    montoDesembolso: this.simulacionCredito.montoDesembolso,
    frecuencia: this.simulacionCredito.frecuencia,
    tem: this.simulacionCredito.tem,
    nroCuotas: this.simulacionCredito.nroCuotas,
    fechaDesembolso: this.simulacionCredito.fechaDesembolso,
    fechaPrimeraCuota: this.simulacionCredito.fechaPrimeraCuota,
  };
  }


}
