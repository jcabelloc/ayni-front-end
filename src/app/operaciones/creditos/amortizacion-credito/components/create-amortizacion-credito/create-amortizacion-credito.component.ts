import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { DatosSimulacionAmortizacion } from '../../models/DatosSimulacionAmortizacion';
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
  datosSimulacionAmortizacion: DatosSimulacionAmortizacion;
  amortizacionCredito: AmortizacionCredito;

  viasRecaudo: Option[] = [
    {value: 'CAJA', viewValue: 'CAJA'},
    {value: 'BANCO', viewValue: 'BANCO'},
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
      viaRecaudo: ['', Validators.required],
      idCuentaRecaudo: ['', Validators.required],
    });
  }

  onViaRecaudoSelection(viaRecaudo: MatSelectChange) {
    if(viaRecaudo.value == 'BANCO') {
      this.cuentasRecaudo = [
        {idCuenta: 10001, descripcion: 'BCP - 1234-18830-28983'},
        {idCuenta: 10002, descripcion: 'IBK - 2183-9999-282821983'}
      ];
      
    }
    else if (viaRecaudo.value == 'CAJA') {
      this.cuentasRecaudo = [
        {idCuenta: 10000001, descripcion: 'CAJA NVA. CAJAMARCA - ORFITA AJON'},
        {idCuenta: 10000999, descripcion: 'CAJA NVA. CAJAMARCA - MARCO FERNADEZ'}
      ];
    
    }
  }
  onSubmitStep1({value, valid}: {value: AmortizacionCredito, valid: boolean}){
    this.datosSimulacionAmortizacion = {
      idCuenta: this.idCuenta,
      montoAmortizacion: value.montoAmortizacion,
    };
    this.amortizacionCredito = {
      idCuenta: this.idCuenta,
      montoAmortizacion: value.montoAmortizacion,
    };
  }

  onSubmitStep2({value, valid}: {value: AmortizacionCredito, valid: boolean}){
    
    this.amortizacionCredito.viaRecaudo = value.viaRecaudo;
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
