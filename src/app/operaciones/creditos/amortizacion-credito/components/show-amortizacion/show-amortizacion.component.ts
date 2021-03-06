import { Component, OnInit } from '@angular/core';
import { AmortizacionCredito } from '../../models/AmortizacionCredito';
import { ActivatedRoute } from '@angular/router';
import { AmortizacionCreditoService } from '../../services/amortizacion-credito.service';

@Component({
  selector: 'app-show-amortizacion',
  templateUrl: './show-amortizacion.component.html',
  styleUrls: ['./show-amortizacion.component.css']
})
export class ShowAmortizacionComponent implements OnInit {

  amortizacion: AmortizacionCredito = null;

  constructor(private route: ActivatedRoute, private amortizacionCreditoService: AmortizacionCreditoService ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.amortizacionCreditoService.findAmortizacionById(id)
      .subscribe(
        amortizacion => {
          this.amortizacion = amortizacion;
        },
        err => console.log(err)
      )
  }
}


