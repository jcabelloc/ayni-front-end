import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DesembolsoCredito, Cliente } from '../../models/DesembolsoCredito';
import { MatDialog, MatSelectChange } from '@angular/material';
import { ClienteService } from '../../../../../clientes/adm-cliente/services/cliente.service';
import { SearchClienteComponent } from '../../../../../clientes/shared-cliente/components/search-cliente/search-cliente.component';
import { DesembolsoCreditoService } from '../../services/desembolso-credito.service';
import { CuentaDesembolso } from '../../models/CuentaDesembolso';
import { SimulacionCredito } from '../../../../../creditos/simulacion-credito/models/SimulacionCredito';
import { Router } from '@angular/router';

export interface Option {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-create-desembolso-credito',
  templateUrl: './create-desembolso-credito.component.html',
  styleUrls: ['./create-desembolso-credito.component.css']
})
export class CreateDesembolsoCreditoComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  desembolsoCredito: DesembolsoCredito;
  simulacionCredito: SimulacionCredito; 
  cliente: Cliente;

  tiposCuentaDesembolso: Option[] = [
    {value: 'CAJA', viewValue: 'CAJA'},
    /*{value: 'BANCOS', viewValue: 'BANCOS'},*/
  ];

  cuentasDesembolso: CuentaDesembolso[];

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
    {value: 'EPEREZ', viewValue: 'EPEREZ'},
    {value: 'MFERNANDEZ', viewValue: 'MFERNANDEZ'},
    {value: 'OAJON', viewValue: 'OAJON'},
  ];

  constructor(private _formBuilder: FormBuilder, 
              public dialog: MatDialog,
              private clienteService: ClienteService,
              private desembolsoCreditoService: DesembolsoCreditoService,
              private router: Router) 
  { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      montoDesembolso: [null, Validators.required],
      frecuencia: ['SEMANAL', Validators.required],
      tem: [12.5, Validators.required],
      nroCuotas: [null, Validators.required],
      fechaDesembolso: [this.getStringLocalDate(new Date()), Validators.required],
      fechaPrimeraCuota: [this.getFechaPrimeraCuota(this.getStringLocalDate(new Date()), 'SEMANAL'), Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      tipoIdentificacion: ['DNI',Validators.required],
      nroIdentificacion: ['',Validators.required],
      tipoCuentaDesembolso: ['', Validators.required],
      idCuentaDesembolso: ['', Validators.required],
      usuarioAprobador:['', Validators.required],
    });
  }

  onSubmitStep1({value, valid}: {value: any, valid: boolean}){
    // "value: any" since value cannot be parsed to nested objects

    this.desembolsoCredito = {
      credito: {
        idCuenta: null,
        montoDesembolso: value.montoDesembolso,
        moneda: '1', //TODO
        frecuencia: value.frecuencia,
        tem: value.tem,
        nroCuotas:  value.nroCuotas,
        fechaDesembolso: value.fechaDesembolso,
        fechaPrimeraCuota: value.fechaPrimeraCuota,
      }
    };
    this.simulacionCredito = {
      montoDesembolso: value.montoDesembolso,
      frecuencia: value.frecuencia,
      tem: value.tem,
      nroCuotas:  value.nroCuotas,
      fechaDesembolso: value.fechaDesembolso,
      fechaPrimeraCuota: value.fechaPrimeraCuota,
    };
  }

  onSubmitStep2({value, valid}: {value: any, valid: boolean}){
    this.desembolsoCredito.cliente = this.cliente;
    this.desembolsoCredito.operacion = {tipoCuentaDesembolso: value.tipoCuentaDesembolso, idCuentaDesembolso: +value.idCuentaDesembolso, 
      cuentaDesembolsoDescripcion: this.cuentasDesembolso.find(e=> e.idCuenta == value.idCuentaDesembolso).descripcion};
    this.desembolsoCredito.credito.usuarioAprobador = value.usuarioAprobador;
  }

  onFrecuenciaSelection(frecuencia: MatSelectChange) {
    this.updateFechaPrimeraCuota();
  }

  onTipoCuentaDesembolsoSelection(tipoCuentaDesembolso: MatSelectChange) {
    /*
    if(tipoCuentaDesembolso.value == 'BANCOS') {
      this.cuentasDesembolso = [
        {idCuenta: 10001, descripcion: 'BCP - 1234-18830-28983'},
        {idCuenta: 10002, descripcion: 'IBK - 2183-9999-282821983'}
      ];
      
    }
    else */if (tipoCuentaDesembolso.value == 'CAJA') {
      this.cuentasDesembolso = [
        {idCuenta: 10000001, descripcion: 'Caja Nueva Cajamarca - OAJON'},
      ];
    
    }
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

  searchCliente(): void {
    const dialogRef = this.dialog.open(SearchClienteComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(idCliente => {
      if (idCliente) {
        this.clienteService.findClienteById(idCliente)
          .subscribe (
            cliente => {
              this.cliente = { 
                id : cliente.id, 
                nombre: cliente.personaNatural.nombre, 
                tipoIdentificacion: cliente.personaNatural.tipoIdentificacion,
                nroIdentificacion: cliente.personaNatural.nroIdentificacion 
              };
              this.secondFormGroup.patchValue({nombre: cliente.personaNatural.nombre});
              this.secondFormGroup.patchValue({tipoIdentificacion: cliente.personaNatural.tipoIdentificacion});
              this.secondFormGroup.patchValue({nroIdentificacion: cliente.personaNatural.nroIdentificacion});
            }
          );

      }
    });
  }
  desembolsarCredito(){
    console.log(this.desembolsoCredito);
    this.desembolsoCredito.credito.usuarioResponsable = "OAJON"; //TODO
    this.desembolsoCreditoService.createDesembolso(this.desembolsoCredito)
      .subscribe(
        desembolsoCredito => {
          this.router.navigate(['operaciones/creditos/desembolso-credito/show/' + desembolsoCredito.operacion.id]); 
        },
        err => console.log(err)
      );
  }

  showReporteSolicitud(){
    this.desembolsoCredito.credito.usuarioResponsable = "OAJON"; //TODO
    this.desembolsoCreditoService.buildReporteSolicitud(this.desembolsoCredito)
      .subscribe(
        res => {
          var url = window.URL.createObjectURL(res);
          window.open(url);
        },
        err => {
          console.log(err);
        }
      );
  }

}
