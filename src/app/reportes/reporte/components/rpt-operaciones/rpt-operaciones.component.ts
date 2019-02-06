import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-rpt-operaciones',
  templateUrl: './rpt-operaciones.component.html',
  styleUrls: ['./rpt-operaciones.component.css']
})
export class RptOperacionesComponent implements OnInit {
  readonly reporteUrl: string = environment.reporteUrl;
  desde: string;
  hasta: string;

  constructor() { }

  ngOnInit() {
    this.desde = this.getStringLocalDate(new Date());
    this.hasta = this.getStringLocalDate(new Date());
  }

  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }
  onSubmit({value, valid}: {value: any, valid: boolean}) {
    if (valid) {
      let rptUrl = this.reporteUrl + "operaciones?desde=" + this.desde 
      + "&hasta=" + this.hasta;
      console.log(rptUrl);
      window.open(rptUrl);
    }
  }

}
