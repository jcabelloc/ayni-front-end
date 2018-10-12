import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-rpt-cartera-creditos',
  templateUrl: './rpt-cartera-creditos.component.html',
  styleUrls: ['./rpt-cartera-creditos.component.css']
})
export class RptCarteraCreditosComponent implements OnInit {

  constructor(private reporteService: ReporteService) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    if (valid) {
      window.open("http://localhost:8080/reportes/cartera-creditos");
      /*
      this.reporteService.getReporteCarteraCreditos()
        .subscribe(
          resp => {
            console.log(resp);
          },
          err => {
            console.log(err);
          }
        )
      */
    }
  }
}
