import { Component, OnInit } from '@angular/core';
import { DatosCredito } from '../../models/DatosCredito';
import { MatSelectChange } from '@angular/material';
import { SimulacionCreditoService } from '../../services/simulacion-credito.service';


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
  datosCredito: DatosCredito = {
    montoDesembolso: null,
    frecuencia: null,
    tem: null,
    nroCuotas: null,
    fechaDesembolso: null,
    fechaPrimeraCuota: null
  };

  frecuencias: Option[] = [
    {value: 'SEMANAL', viewValue: 'Semanal'},
    {value: 'MENSUAL', viewValue: 'Mensual'},
    {value: 'DIARIA', viewValue: 'Diaria'},
  ];

  constructor(private simulacionCreditoService: SimulacionCreditoService) { }

  ngOnInit() {
    this.datosCredito.tem = 14.5;
    this.datosCredito.frecuencia = 'SEMANAL';
    this.datosCredito.fechaDesembolso = this.getStringLocalDate(new Date());
    this.setFechaPrimeraCuota(this.datosCredito.fechaDesembolso, this.datosCredito.frecuencia);
  }

  onFrecuenciaSelection(frecuencia: MatSelectChange) {
    this.setFechaPrimeraCuota(this.datosCredito.fechaDesembolso, this.datosCredito.frecuencia);
  }

  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    console.log(fechaString);
    return fechaString;
  }

  onFechaDesembolsoBlur() {
    this.setFechaPrimeraCuota(this.datosCredito.fechaDesembolso, this.datosCredito.frecuencia);
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
    this.datosCredito.fechaPrimeraCuota = this.getStringLocalDate(fechaPrimeraCuotaDate);
  }

  onSubmit() {
    this.simulacionCreditoService.getSimulacionCronograma(this.datosCredito)
      .subscribe(
        data => {console.log(data)}
      );
  }


}
