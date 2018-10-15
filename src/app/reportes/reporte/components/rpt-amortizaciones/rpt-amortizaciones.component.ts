import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-rpt-amortizaciones',
  templateUrl: './rpt-amortizaciones.component.html',
  styleUrls: ['./rpt-amortizaciones.component.css']
})
export class RptAmortizacionesComponent implements OnInit {
  readonly reporteUrl: string = environment.reporteUrl;

  constructor() { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: any, valid: boolean}) {
    if (valid) {
      let rptUrl = this.reporteUrl + "amortizaciones";
      window.open(rptUrl);
    }
  }
}
