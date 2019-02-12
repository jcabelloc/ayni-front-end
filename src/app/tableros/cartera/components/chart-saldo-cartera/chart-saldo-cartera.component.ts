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
  meta: number = 21250;

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
    this.carteraService.queryCarteraSaldo('Febrero', 'diaMes')
      .subscribe(
        XYSerie => {
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
