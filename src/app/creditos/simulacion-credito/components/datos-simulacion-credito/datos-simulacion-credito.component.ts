import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { DatosSimulacionCredito } from '../../models/DatosSimulacionCredito';

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
  datosSimulacionCredito: DatosSimulacionCredito = {
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
    this.datosSimulacionCredito.tem = 12.5;
    this.datosSimulacionCredito.frecuencia = 'SEMANAL';
    this.datosSimulacionCredito.fechaDesembolso = this.getStringLocalDate(new Date());
    this.setFechaPrimeraCuota(this.datosSimulacionCredito.fechaDesembolso, this.datosSimulacionCredito.frecuencia);
  }

  onFrecuenciaSelection(frecuencia: MatSelectChange) {
    this.setFechaPrimeraCuota(this.datosSimulacionCredito.fechaDesembolso, this.datosSimulacionCredito.frecuencia);
  }

  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }

  onFechaDesembolsoBlur() {
    this.setFechaPrimeraCuota(this.datosSimulacionCredito.fechaDesembolso, this.datosSimulacionCredito.frecuencia);
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
    this.datosSimulacionCredito.fechaPrimeraCuota = this.getStringLocalDate(fechaPrimeraCuotaDate);
  }

  onSubmit() {
   this.datosSimulacionCredito = {
    montoDesembolso: this.datosSimulacionCredito.montoDesembolso,
    frecuencia: this.datosSimulacionCredito.frecuencia,
    tem: this.datosSimulacionCredito.tem,
    nroCuotas: this.datosSimulacionCredito.nroCuotas,
    fechaDesembolso: this.datosSimulacionCredito.fechaDesembolso,
    fechaPrimeraCuota: this.datosSimulacionCredito.fechaPrimeraCuota,
  };
  }


}
