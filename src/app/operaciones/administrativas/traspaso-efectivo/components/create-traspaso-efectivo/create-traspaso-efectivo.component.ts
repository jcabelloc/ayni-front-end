import { Component, OnInit } from '@angular/core';
import { TraspasoEfectivo } from '../../Models/TraspasoEfectivo';
import { TraspasoEfectivoService } from '../../services/traspaso-efectivo.service';
import { Router } from '@angular/router';


interface Option {
  value: string;
  viewValue: string;
}
interface Cuenta {
  idCuenta: number;
  descripcion: string;
}

@Component({
  selector: 'app-create-traspaso-efectivo',
  templateUrl: './create-traspaso-efectivo.component.html',
  styleUrls: ['./create-traspaso-efectivo.component.css']
})
export class CreateTraspasoEfectivoComponent implements OnInit {

  cuentasCaja: Cuenta[] = [{idCuenta: 10000001, descripcion: 'CAJA NVA. CAJAMARCA - OAJON'}]
  cuentasBanco: Cuenta[] = [{idCuenta: 10000002, descripcion: 'BCP - 4352477093079'}]

  tiposTraspaso: Option[] = [
    {value: 'REMESA_BANCO', viewValue: 'Remesa a Banco'},
    {value: 'HABILITACION_CAJA', viewValue: 'Habilitacion de Caja'},
  ];

  tipoTraspaso: string;

  traspaso: TraspasoEfectivo = {
    moneda: '1',
    detalleBanco:  {},
  }
  constructor(
    private traspasoEfectivoService: TraspasoEfectivoService,
    private router: Router,
    ) 
    { }

  ngOnInit() {
    this.traspaso.detalleBanco.fechaOperacion = this.getStringLocalDate(new Date());

  }

  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }

  onSubmit({value, valid}: {value: TraspasoEfectivo, valid: boolean}){
    if (valid) {
      this.traspaso.tipoOperacion = this.tipoTraspaso;
      this.traspaso.detalleBanco.montoOperacion = this.traspaso.monto;
      this.traspasoEfectivoService.createTraspasoEfectivo(this.traspaso)
        .subscribe(
          traspaso => {
            console.log(traspaso);
            this.router.navigate(['operaciones/administrativas/traspaso-efectivo/show/' + traspaso.id ]); 
          },
          err => {
            console.log(err);
          }

        )
        
    }
    
  }
  onMontoBlur(){
    this.traspaso.detalleBanco.montoOperacion = this.traspaso.monto;
  }

}
