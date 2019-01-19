import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { toDate } from '@angular/common/src/i18n/format_date';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';


interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rpt-amortizaciones',
  templateUrl: './rpt-amortizaciones.component.html',
  styleUrls: ['./rpt-amortizaciones.component.css']
})
export class RptAmortizacionesComponent implements OnInit {
  readonly reporteUrl: string = environment.reporteUrl;
  today  = new Date();
  mes: String = (this.today.getMonth() + 1).toString();
  year: String = (this.today.getFullYear()).toString();
  meses: Option[] = [
    {value: '1', viewValue: 'Enero'}, {value: '2', viewValue: 'Febrero'},
    {value: '3', viewValue: 'Marzo'}, {value: '4', viewValue: 'Abril'},
    {value: '5', viewValue: 'Mayo'}, {value: '6', viewValue: 'Junio'},
    {value: '7', viewValue: 'Julio'}, {value: '8', viewValue: 'Agosto'},
    {value: '9', viewValue: 'Octubre'}, {value: '10', viewValue: 'Octubre'},
    {value: '11', viewValue: 'Noviembre'}, {value: '12', viewValue: 'Diciembre'},
  ];
  years: Option[] = [
    {value: '2018', viewValue: '2018'}, {value: '2019', viewValue: '2019'},
  ];
  constructor() { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: any, valid: boolean}) {
    if (valid) {
      let rptUrl = this.reporteUrl + "amortizaciones?month=" + this.mes 
      + "&year=" + this.year ;
      window.open(rptUrl);
    }
  }
}
