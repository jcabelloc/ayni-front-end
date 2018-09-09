import { Component, OnInit} from '@angular/core';
import { DesembolsoCredito } from '../../models/DesembolsoCredito';
import { ActivatedRoute } from '@angular/router';
import { DesembolsoCreditoService } from '../../services/desembolso-credito.service';

@Component({
  selector: 'app-show-desembolso',
  templateUrl: './show-desembolso.component.html',
  styleUrls: ['./show-desembolso.component.css']
})
export class ShowDesembolsoComponent implements OnInit {

  desembolsoCredito: DesembolsoCredito = {
    credito: {idCuenta: null, nroCuotas: null, moneda: null, montoDesembolso: null, fechaDesembolso: null, 
        fechaPrimeraCuota: null, frecuencia: null, tem: null, usuarioAprobador: null, usuarioResponsable: null},
    cliente: {id: null, nombre: null, tipoIdentificacion: null, nroIdentificacion: null},
    operacion: {id: null, moneda: null, monto: null, tipoOperacion: null, usuario: null, fechaOperacion: null, 
        horaOperacion: null, cuentaDesembolsoDescripcion: null, idCuentaDesembolso: null, tipoCuentaDesembolso: null,}
  };

  constructor(private route: ActivatedRoute, private desembolsoCreditoService: DesembolsoCreditoService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.desembolsoCreditoService.findDesembolsoById(id)
      .subscribe(
        desembolsoCredito => {
          console.log(desembolsoCredito);
          this.desembolsoCredito = desembolsoCredito;
        },
        err => console.log(err)
      )
    /*
    this.desembolsoCredito = {
      credito: { idCuenta: 1000012, montoDesembolso: 1500, moneda: '1', frecuencia: 'SEMANAL', tem: 12.5, nroCuotas:  12, fechaDesembolso: '2018-08-28',
        fechaPrimeraCuota: '2018-09-05', usuarioResponsable: 'OAJON', usuarioAprobador: 'GRIOS',}, 
      cliente: { id: 1000001, nombre: 'CABELLO CORAL JUAN JESUS', nroIdentificacion: '10681340', tipoIdentificacion: 'DNI' },
      operacion: { tipoCuentaDesembolso: 'CAJA', idCuentaDesembolso: 1000001, cuentaDesembolsoDescripcion: 'Caja Nueva Cajamarca - OAJON',
      usuario: 'OAJON', fechaOperacion: '2018-08-29', horaOperacion: '20:10:08', id: 100000125,
      }
    };*/
  }

}
