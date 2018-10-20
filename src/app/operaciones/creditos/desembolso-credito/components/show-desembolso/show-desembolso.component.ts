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
          this.desembolsoCredito = desembolsoCredito;
        },
        err => console.log(err)
      )
  }

}
