import { Component, OnInit } from '@angular/core';
import { CarteraService } from '../../services/cartera.service';


@Component({
  selector: 'app-chart-saldo-cartera',
  templateUrl: './chart-saldo-cartera.component.html',
  styleUrls: ['./chart-saldo-cartera.component.css']
})
export class ChartSaldoCarteraComponent implements OnInit {

  xSerie: string[] = [];
  ySerie: number[] = [];
  meta: number = 33400;
  fechaDesde: Date;
  fechaHasta: Date = new Date();;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              min: 0
          }
      }]
    }
  };
  public barChartLabels:string[] = this.xSerie;
  
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: this.ySerie, label: 'Saldo de Cartera'},
    {data: [], label: 'Meta Mes', type: 'line'},
  ];

  constructor(private carteraService: CarteraService) { }

  ngOnInit() {
    this.fechaHasta.setDate((new Date()).getDate());
    this.fechaDesde = new Date(this.fechaHasta.getFullYear(), this.fechaHasta.getMonth(), 1); // first day of the month
    let desde = this.fechaDesde.toISOString().split("T")[0];
    let hasta = this.fechaHasta.toISOString().split("T")[0];

    this.carteraService.queryCarteraSaldo(desde, hasta, 'diaMes')
      .subscribe(
        XYSerie => {
          console.log(XYSerie);
          this.xSerie = XYSerie.xSerie;
          this.ySerie = XYSerie.ySerie;
          this.barChartLabels.length = 0;
          for (let i = 0; i < this.xSerie.length ; i++) {
              this.barChartLabels.push(this.xSerie[i]);
          }
          
          let clone = JSON.parse(JSON.stringify(this.barChartData));
          clone[0].data = XYSerie.ySerie;
          clone[1].data = new Array(this.ySerie.length).fill(this.meta);
          this.barChartData = clone;
        },
        err => {
          console.log(err);
        }
      )
  }
  
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
