import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-rpt-cartera-creditos',
  templateUrl: './rpt-cartera-creditos.component.html',
  styleUrls: ['./rpt-cartera-creditos.component.css']
})
export class RptCarteraCreditosComponent implements OnInit {
  readonly reporteUrl: string = environment.reporteUrl;

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    if (valid) {
      let rptUrl = this.reporteUrl + "cartera-creditos";
      window.open(rptUrl);
    }
  }
}
