import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaCreditoService } from '../../services/consulta-credito.service';
import { Credito } from '../../models/Credito';

@Component({
  selector: 'app-show-credito',
  templateUrl: './show-credito.component.html',
  styleUrls: ['./show-credito.component.css']
})
export class ShowCreditoComponent implements OnInit {

  idCuenta: number;
  credito: Credito = null;

  constructor(private route: ActivatedRoute, private consultaCreditoService: ConsultaCreditoService) { }

  ngOnInit() {
    this.idCuenta = parseInt(this.route.snapshot.paramMap.get('idCuenta'));
    this.consultaCreditoService.findCreditoById(this.idCuenta)
      .subscribe(
        credito => {
          this.credito = credito;
        },
        err => {
          console.log(err);
        }
      );
  }

}
