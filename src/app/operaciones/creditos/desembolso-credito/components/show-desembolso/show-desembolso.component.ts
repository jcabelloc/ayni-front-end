import { Component, OnInit } from '@angular/core';
import { DesembolsoCredito } from '../../models/DesembolsoCredito';

@Component({
  selector: 'app-show-desembolso',
  templateUrl: './show-desembolso.component.html',
  styleUrls: ['./show-desembolso.component.css']
})
export class ShowDesembolsoComponent implements OnInit {

  desembolsoCredito: DesembolsoCredito;
  constructor() { }

  ngOnInit() {
    this.desembolsoCredito = {
      id: 1000012,
      montoDesembolso: 1500,
      moneda: '1', 
      frecuencia: 'SEMANAL',
      tem: 12.5,
      nroCuotas:  12,
      fechaDesembolso: '2018-08-28',
      fechaPrimeraCuota: '2018-09-05',
      cliente: { id: 1000001, nombre: 'CABELLO CORAL JUAN JESUS', nroIdentificacion: '10681340', tipoIdentificacion: 'DNI' },
      responsableCuenta: 'OAJON',
      usuarioAprobador: 'GRIOS',
      tipoCuentaDesembolso: 'CAJA',
      idCuentaDesembolso: 1000001,
      cuentaDesembolsoDescripcion: 'Caja Nueva Cajamarca - OAJON',
      usuarioOperacion: 'OAJON',
      fechaOperacion: '2018-08-29',
      horaOperacion: '20:10:08',
      idCuenta: 100000125,
    };
  }

}
