import { Component, OnInit, Input } from '@angular/core';
import { DesembolsoCredito } from '../../models/DesembolsoCredito';

@Component({
  selector: 'app-datos-desembolso-credito',
  templateUrl: './datos-desembolso-credito.component.html',
  styleUrls: ['./datos-desembolso-credito.component.css']
})
export class DatosDesembolsoCreditoComponent implements OnInit {

  @Input()
  desembolsoCredito: DesembolsoCredito;

  @Input()
  step: number;

  constructor() { }

  ngOnInit() {
  }

}
