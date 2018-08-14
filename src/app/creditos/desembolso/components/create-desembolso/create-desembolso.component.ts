import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatosCredito } from '../../../simulacion-credito/models/DatosCredito';
import { MatSelectChange } from '@angular/material';
import { MatDialog } from '@angular/material';
import { SearchClienteComponent } from '../../../../clientes/shared-cliente/components/search-cliente/search-cliente.component';
import { ClienteService } from '../../../../clientes/adm-cliente/services/cliente.service';

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
    {value: 'EFECTIVO', viewValue: 'EFECTIVO'},
    {value: 'BANCO', viewValue: 'BANCO'},
  ];

  frecuencias: Option[] = [
    {value: 'SEMANAL', viewValue: 'SEMANAL'},
    {value: 'MENSUAL', viewValue: 'MENSUAL'},
    {value: 'DIARIA', viewValue: 'DIARIA'},
  ];

  tipoDocs: Option[] = [
    {value: 'DNI', viewValue: 'DNI'}
  ];

  aprobadores: Option[] = [
    {value: 'GRIOS', viewValue: 'GRIOS'},
    {value: 'EPREZ', viewValue: 'EPEREZ'},
    {value: 'MFERNANDEZ', viewValue: 'MFERNANDEZ'},

  ];


  constructor(private _formBuilder: FormBuilder, 
              public dialog: MatDialog,
              private clienteService: ClienteService) 
  { }

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
      tipoIdentificacion: ['DNI',Validators.required],
      nroIdentificacion: ['',Validators.required],
      usuarioAprobador:['', Validators.required],
      viaDesembolso: ['', Validators.required],
    });
  }
  
  setDatosCredito(step: number){
    if (step == 1) {
      this.datosCredito = { 
        montoDesembolso: this.firstFormGroup.value.montoDesembolso,
        frecuencia: this.firstFormGroup.value.frecuencia,
        tem: this.firstFormGroup.value.tem,
        nroCuotas:  this.firstFormGroup.value.nroCuotas,
        fechaDesembolso: this.firstFormGroup.value.fechaDesembolso,
        fechaPrimeraCuota: this.firstFormGroup.value.fechaPrimeraCuota,
      }
    } else if (step == 2) {
      this.datosCredito.cliente = this.datosCredito.cliente;
      this.datosCredito.usuarioAprobador = this.secondFormGroup.value.usuarioAprobador;
      this.datosCredito.viaDesembolso = this.secondFormGroup.value.viaDesembolso;
    }
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

  onSubmitStep1({value, valid}: {value: DatosCredito, valid: boolean}){
    this.datosCredito = { 
      montoDesembolso: value.montoDesembolso,
      frecuencia: value.frecuencia,
      tem: value.tem,
      nroCuotas:  value.nroCuotas,
      fechaDesembolso: value.fechaDesembolso,
      fechaPrimeraCuota: value.fechaPrimeraCuota,
    }
  }
  searchCliente(): void {
    const dialogRef = this.dialog.open(SearchClienteComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(idCliente => {
      if (idCliente) {
        this.clienteService.findClienteById(idCliente)
          .subscribe (
            cliente => {
              this.datosCredito.cliente = cliente;
              this.secondFormGroup.patchValue({cliente: cliente.personaNatural.nombre});
              this.secondFormGroup.patchValue({tipoIdentificacion: cliente.personaNatural.tipoIdentificacion});
              this.secondFormGroup.patchValue({nroIdentificacion: cliente.personaNatural.nroIdentificacion});
            }
          );

      }
    });
  }
}