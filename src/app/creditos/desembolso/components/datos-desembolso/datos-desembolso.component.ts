import { Component, OnInit, Input } from '@angular/core';
import { Credito } from '../../../simulacion-credito/models/Credito';

@Component({
  selector: 'app-datos-desembolso',
  templateUrl: './datos-desembolso.component.html',
  styleUrls: ['./datos-desembolso.component.css']
})
export class DatosDesembolsoComponent implements OnInit {
  @Input()
  credito: Credito;

  @Input()
  step: number;


  constructor() {
   }

  ngOnInit() {
  }

}
