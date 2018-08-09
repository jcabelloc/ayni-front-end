import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatosCredito } from '../../../simulacion-credito/models/DatosCredito';
import { MatSelectChange } from '@angular/material';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-desembolso',
  templateUrl: './create-desembolso.component.html',
  styleUrls: ['./create-desembolso.component.css']
})
export class CreateDesembolsoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  address: string;
  datosCredito: DatosCredito;

  viasDesembolso: Option[] = [
    {value: 'EFECTIVO', viewValue: 'Efectivo'},
    {value: 'BANCO', viewValue: 'Banco'},
  ];

  frecuencias: Option[] = [
    {value: 'SEMANAL', viewValue: 'Semanal'},
    {value: 'MENSUAL', viewValue: 'Mensual'},
    {value: 'DIARIA', viewValue: 'Diaria'},
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      montoDesembolso: [null, Validators.required],
      frecuencia: ['SEMANAL', Validators.required],
      tem: [14.5, Validators.required],
      nroCuotas: [null, Validators.required],
      fechaDesembolso: [this.getStringLocalDate(new Date()), Validators.required],
      fechaPrimeraCuota: [this.getFechaPrimeraCuota(this.getStringLocalDate(new Date()), 'SEMANAL'), Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      cliente: ['', Validators.required],
      viaDesembolso: ['', Validators.required],
    });

    this.setDatosCredito();
  }
  
  setDatosCredito(){
    this.datosCredito = { 
      montoDesembolso: this.firstFormGroup.value.montoDesembolso,
      frecuencia: this.firstFormGroup.value.frecuencia,
      tem: this.firstFormGroup.value.tem,
      nroCuotas:  this.firstFormGroup.value.nroCuotas,
      fechaDesembolso: this.firstFormGroup.value.fechaDesembolso,
      fechaPrimeraCuota: this.firstFormGroup.value.fechaPrimeraCuota,
    }
    console.log(this.datosCredito);

  }

  onFrecuenciaSelection(frecuencia: MatSelectChange) {
    this.updateFechaPrimeraCuota();
  }


  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }

  onFechaDesembolsoBlur() {
    this.updateFechaPrimeraCuota();
  }

  updateFechaPrimeraCuota() {
    this.firstFormGroup.patchValue( {
      fechaPrimeraCuota: this.getFechaPrimeraCuota(this.firstFormGroup.value.fechaDesembolso, this.firstFormGroup.value.frecuencia)
    })
  }

  getFechaPrimeraCuota(fechaDesembolso: string, frecuencia: string) {

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
    return this.getStringLocalDate(fechaPrimeraCuotaDate);
  }
}