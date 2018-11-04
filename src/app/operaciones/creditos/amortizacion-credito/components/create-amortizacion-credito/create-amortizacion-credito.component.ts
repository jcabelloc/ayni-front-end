import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
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
  saldoDeuda: number;

  constructor(
    private _formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private amortizacionCreditoService: AmortizacionCreditoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idCuenta = parseInt(this.route.snapshot.paramMap.get('idCuenta'));
    this.firstFormGroup = this._formBuilder.group({
      montoAmortizacion: [null, [Validators.required]],
    });

    this.secondFormGroup = this._formBuilder.group({
      tipoCuentaRecaudo: ['', Validators.required],
      idCuentaRecaudo: ['', Validators.required],
      nroOperacion: ['', Validators.required],
      fechaOperacion: ['', Validators.required],
      montoOperacion: ['', Validators.required],
    });
  }
  montoValidator(saldoDeuda: number): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
      let montoAmortizacion = control.value.montoAmortizacion;
      console.log(montoAmortizacion);
      console.log(saldoDeuda);
      return ((montoAmortizacion > saldoDeuda)|| montoAmortizacion<=0)? {'montoInvalido': {value: control.value}}:null;
    }

  }

  onTipoCuentaRecaudoSelection(tipoCuentaRecaudo: MatSelectChange) {

    this.isRecaudoBanco = false;
    if(tipoCuentaRecaudo.value == 'BANCOS') {
      this.isRecaudoBanco = true;
      this.cuentasRecaudo = [
        {idCuenta: 10000002, descripcion: 'BCP - 4352477093079'},
      ];
      this.secondFormGroup.patchValue({fechaOperacion: this.getStringLocalDate(new Date())}) ;
      this.secondFormGroup.patchValue({montoOperacion: this.amortizacionCredito.operacion.monto}) ;
      this.enableBanco(true);
    }
    else if (tipoCuentaRecaudo.value == 'CAJA') {
      this.cuentasRecaudo = [
        {idCuenta: 10000001, descripcion: 'CAJA NVA. CAJAMARCA - OAJON'},
      ];
      this.enableBanco(false);
    }
  }

  enableBanco(isEnabled: boolean) {
    if (isEnabled) {
      this.secondFormGroup.get("nroOperacion").enable();
      this.secondFormGroup.get("fechaOperacion").enable()
      this.secondFormGroup.get("montoOperacion").enable()
    } else {
      this.secondFormGroup.get("nroOperacion").disable();
      this.secondFormGroup.get("fechaOperacion").disable()
      this.secondFormGroup.get("montoOperacion").disable()
    }
  }
  onSubmitStep1({value, valid}: {value: any, valid: boolean}){
    if (valid) {
      this.simulacionAmortizacion = {
        idCuenta: this.idCuenta,
        montoAmortizacion: value.montoAmortizacion,
      };
      this.amortizacionCredito = {
        idCuenta: this.idCuenta,
        operacion: { moneda: '1', monto: value.montoAmortizacion}
      };
    }
  }

  onSubmitStep2({value, valid}: {value: any, valid: boolean}){
    // "value: any" since value cannot be parsed to nested object (.detalleBanco)
    if (valid) {
      this.amortizacionCredito.operacion.tipoCuentaRecaudo = value.tipoCuentaRecaudo;
      this.amortizacionCredito.operacion.idCuentaRecaudo = value.idCuentaRecaudo;
      this.amortizacionCredito.detalleBanco = { fechaOperacion: value.fechaOperacion, nroOperacion: value.nroOperacion, montoOperacion: value.montoOperacion};
      this.amortizarCredito(this.amortizacionCredito);
    }
    
  }

  amortizarCredito(amortizacionCredito: AmortizacionCredito) {
    this.amortizacionCreditoService.createAmortizacion(amortizacionCredito)
      .subscribe(
        amortizacionCredito => { 
          this.router.navigate(['operaciones/creditos/amortizacion-credito/show/' + amortizacionCredito.operacion.id ]); 
        },
        err => console.log(err)
      );
  }

  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }

  onDeuda(saldoDeuda: number) {
    this.saldoDeuda = saldoDeuda;
    this.firstFormGroup.setValidators([Validators.required, this.montoValidator(this.saldoDeuda)]);
  }

}
