import { Component, OnInit } from '@angular/core';
import { Credito } from '../../models/Credito';
import { MatSelectChange } from '@angular/material';

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
  credito: Credito = {
    montoDesembolso: null,
    frecuencia: null,
    tem: null,
    nroCuotas: null,
    fechaDesembolso: null,
    fechaPrimeraCuota: null
  };

  creditoForChild: Credito;

  frecuencias: Option[] = [
    {value: 'SEMANAL', viewValue: 'Semanal'},
    {value: 'MENSUAL', viewValue: 'Mensual'},
    {value: 'DIARIA', viewValue: 'Diaria'},
  ];

  constructor() { }

  ngOnInit() {
    this.credito.tem = 14.5;
    this.credito.frecuencia = 'SEMANAL';
    this.credito.fechaDesembolso = this.getStringLocalDate(new Date());
    this.setFechaPrimeraCuota(this.credito.fechaDesembolso, this.credito.frecuencia);
  }

  onFrecuenciaSelection(frecuencia: MatSelectChange) {
    this.setFechaPrimeraCuota(this.credito.fechaDesembolso, this.credito.frecuencia);
  }

  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }

  onFechaDesembolsoBlur() {
    this.setFechaPrimeraCuota(this.credito.fechaDesembolso, this.credito.frecuencia);
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
    this.credito.fechaPrimeraCuota = this.getStringLocalDate(fechaPrimeraCuotaDate);
  }

  onSubmit() {
     
    this.creditoForChild = {
      montoDesembolso: this.credito.montoDesembolso,
      frecuencia: this.credito.frecuencia,
      tem: this.credito.tem,
      nroCuotas: this.credito.nroCuotas,
      fechaDesembolso: this.credito.fechaDesembolso,
      fechaPrimeraCuota: this.credito.fechaPrimeraCuota,
    };
  }


}
