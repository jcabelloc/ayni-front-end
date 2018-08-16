import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DesembolsoCredito } from '../../models/DesembolsoCredito';
import { Cliente } from '../../../../../clientes/adm-cliente/models/Cliente';
import { MatDialog, MatSelectChange } from '@angular/material';
import { ClienteService } from '../../../../../clientes/adm-cliente/services/cliente.service';
import { SearchClienteComponent } from '../../../../../clientes/shared-cliente/components/search-cliente/search-cliente.component';
import { DesembolsoCreditoService } from '../../services/desembolso-credito.service';

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
  cliente: Cliente;

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
              private clienteService: ClienteService,
              private desembolsoCreditoService: DesembolsoCreditoService) 
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

  onSubmitStep1({value, valid}: {value: DesembolsoCredito, valid: boolean}){
    this.desembolsoCredito = {
      montoDesembolso: value.montoDesembolso,
      moneda: '1',
      frecuencia: value.frecuencia,
      tem: value.tem,
      nroCuotas:  value.nroCuotas,
      fechaDesembolso: value.fechaDesembolso,
      fechaPrimeraCuota: value.fechaPrimeraCuota,
      cliente: this.cliente,
    }
  }

  onSubmitStep2({value, valid}: {value: DesembolsoCredito, valid: boolean}){
    this.desembolsoCredito.cliente = this.cliente;
    this.desembolsoCredito.usuarioAprobador = value.usuarioAprobador;
    this.desembolsoCredito.viaDesembolso = value.viaDesembolso;
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

  searchCliente(): void {
    const dialogRef = this.dialog.open(SearchClienteComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(idCliente => {
      if (idCliente) {
        this.clienteService.findClienteById(idCliente)
          .subscribe (
            cliente => {
              this.cliente = cliente;
              this.secondFormGroup.patchValue({cliente: cliente.personaNatural.nombre});
              this.secondFormGroup.patchValue({tipoIdentificacion: cliente.personaNatural.tipoIdentificacion});
              this.secondFormGroup.patchValue({nroIdentificacion: cliente.personaNatural.nroIdentificacion});
            }
          );

      }
    });
  }
  desembolsarCredito(){
    this.desembolsoCreditoService.createDesembolso(this.desembolsoCredito)
      .subscribe(
        desembolsoCredito => {
          console.log(desembolsoCredito);
        },
        err => console.log(err)
      );
  }

}
