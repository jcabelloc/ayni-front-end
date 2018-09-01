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
    });
  }

  onTipoCuentaRecaudoSelection(tipoCuentaRecaudo: MatSelectChange) {
    if(tipoCuentaRecaudo.value == 'BANCOS') {
      this.cuentasRecaudo = [
        {idCuenta: 10001, descripcion: 'BCP - 1234-18830-28983'},
        {idCuenta: 10002, descripcion: 'IBK - 2183-9999-282821983'}
      ];
      
    }
    else if (tipoCuentaRecaudo.value == 'CAJA') {
      this.cuentasRecaudo = [
        {idCuenta: 10000001, descripcion: 'CAJA NVA. CAJAMARCA - ORFITA AJON'},
        {idCuenta: 10000999, descripcion: 'CAJA NVA. CAJAMARCA - MARCO FERNADEZ'}
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

  onSubmitStep2({value, valid}: {value: AmortizacionCredito, valid: boolean}){
    
    this.amortizacionCredito.tipoCuentaRecaudo = value.tipoCuentaRecaudo;
    this.amortizacionCredito.idCuentaRecaudo = value.idCuentaRecaudo;
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

}
