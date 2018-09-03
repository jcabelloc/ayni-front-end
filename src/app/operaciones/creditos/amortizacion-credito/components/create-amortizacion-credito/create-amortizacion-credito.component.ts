import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { SimulacionAmortizacion } from '../../models/SimulacionAmortizacion';
import { AmortizacionCredito } from '../../models/AmortizacionCredito';
import { AmortizacionCreditoService } from '../../services/amortizacion-credito.service';

interface Option {
  value: string;
  viewValue: string;
}

interface CuentaRecaudo {
  idCuenta: number;
  descripcion: string;
}

@Component({
  selector: 'app-create-amortizacion-credito',
  templateUrl: './create-amortizacion-credito.component.html',
  styleUrls: ['./create-amortizacion-credito.component.css']
})
export class CreateAmortizacionCreditoComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  idCuenta: number;
  simulacionAmortizacion: SimulacionAmortizacion;
  amortizacionCredito: AmortizacionCredito;
  isRecaudoBanco: boolean = false;

  tiposCuentaRecaudo: Option[] = [
    {value: 'CAJA', viewValue: 'CAJA'},
    {value: 'BANCOS', viewValue: 'BANCOS'},
  ];

  cuentasRecaudo: CuentaRecaudo[];

  constructor(
    private _formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private amortizacionCreditoService: AmortizacionCreditoService,
  ) { }

  ngOnInit() {
    this.idCuenta = parseInt(this.route.snapshot.paramMap.get('idCuenta'));
    this.firstFormGroup = this._formBuilder.group({
      montoAmortizacion: [null, Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      tipoCuentaRecaudo: ['', Validators.required],
      idCuentaRecaudo: ['', Validators.required],
      nroOperacion: ['', Validators.required],
      fechaOperacion: ['', Validators.required],
      montoOperacion: ['', Validators.required],
    });
  }

  onTipoCuentaRecaudoSelection(tipoCuentaRecaudo: MatSelectChange) {

    this.isRecaudoBanco = false;
    if(tipoCuentaRecaudo.value == 'BANCOS') {
      this.isRecaudoBanco = true;
      this.cuentasRecaudo = [
        {idCuenta: 10000002, descripcion: 'BCP - 123-4567-890'},
      ];
      this.secondFormGroup.patchValue({fechaOperacion: this.getStringLocalDate(new Date())}) ;
      this.secondFormGroup.patchValue({montoOperacion: this.amortizacionCredito.montoAmortizacion}) ;
    }
    else if (tipoCuentaRecaudo.value == 'CAJA') {
      this.cuentasRecaudo = [
        {idCuenta: 10000001, descripcion: 'CAJA NVA. CAJAMARCA - ORFITA AJON'},
      ];
    
    }
  }
  onSubmitStep1({value, valid}: {value: AmortizacionCredito, valid: boolean}){
    this.simulacionAmortizacion = {
      idCuenta: this.idCuenta,
      montoAmortizacion: value.montoAmortizacion,
    };
    this.amortizacionCredito = {
      idCuenta: this.idCuenta,
      moneda: '1', //TODO
      montoAmortizacion: value.montoAmortizacion,
    };
  }

  onSubmitStep2({value, valid}: {value: any, valid: boolean}){
    // "value: any" since value cannot be parsed to nested object (.detalleBanco)
    this.amortizacionCredito.tipoCuentaRecaudo = value.tipoCuentaRecaudo;
    this.amortizacionCredito.idCuentaRecaudo = value.idCuentaRecaudo;
    this.amortizacionCredito.detalleBanco = { fechaOperacion: value.fechaOperacion, nroOperacion: value.nroOperacion, montoOperacion: value.montoOperacion};
    this.amortizarCredito(this.amortizacionCredito);
    
  }

  amortizarCredito(amortizacionCredito: AmortizacionCredito) {
    console.log(amortizacionCredito);
    this.amortizacionCreditoService.createAmortizacion(amortizacionCredito)
      .subscribe(
        amortizacionCredito => console.log(amortizacionCredito),
        err => console.log(err)
      );
  }

  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }

}
