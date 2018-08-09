import { Component, OnInit, Input } from '@angular/core';
import { DatosCredito } from '../../../simulacion-credito/models/DatosCredito';

@Component({
  selector: 'app-datos-desembolso',
  templateUrl: './datos-desembolso.component.html',
  styleUrls: ['./datos-desembolso.component.css']
})
export class DatosDesembolsoComponent implements OnInit {
  @Input()
  datosCredito: DatosCredito;

  datosCreditoForChild: DatosCredito;

  constructor() { }

  ngOnInit() {
  }

}
