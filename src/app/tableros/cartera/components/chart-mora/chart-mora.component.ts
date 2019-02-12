import { Component, OnInit, Input } from '@angular/core';
import { CarteraService } from '../../services/cartera.service';

@Component({
  selector: 'app-chart-mora',
  templateUrl: './chart-mora.component.html',
  styleUrls: ['./chart-mora.component.css']
})
export class ChartMoraComponent implements OnInit {

  @Input() diasAtrasoMayorA: number;
  @Input() metaMora: number;

  xSerie: string[] = [];
  ySerie: number[] = [];
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
    {data: this.ySerie, label: '% Mora Mayor a '},
    {data: [], label: '% Mora Meta', type: 'line'},
  ];

  constructor(private carteraService: CarteraService) { }

  ngOnInit() {
    this.fechaHasta.setDate((new Date()).getDate() - 1); // yesterday
    this.fechaDesde = new Date(this.fechaHasta.getFullYear(), this.fechaHasta.getMonth(), 1); // first day of the month
    let desde = this.fechaDesde.toISOString().split("T")[0];
    let hasta = this.fechaHasta.toISOString().split("T")[0];

    this.carteraService.queryCarteraSaldo(desde, hasta, 'diaMes')
      .subscribe(
        XYSerieSaldo => {
          this.xSerie = XYSerieSaldo.xSerie;
          this.carteraService.queryCarteraAtrasada(this.diasAtrasoMayorA, desde, hasta, 'diaMes')
            .subscribe(
              XYSerieAtrasada => {
                this.ySerie = XYSerieAtrasada.ySerie.map(
                  function(n, i) { return Math.round( n / XYSerieSaldo.ySerie[i] * 100 * 10) / 10; }
                );
                this.barChartLabels.length = 0;
                for (let i = 0; i < this.xSerie.length ; i++) {
                    this.barChartLabels.push(this.xSerie[i]);
                }
                
                let clone = JSON.parse(JSON.stringify(this.barChartData));
                clone[0].data = this.ySerie;
                clone[0].label += this.diasAtrasoMayorA + 'd';
                clone[1].data = new Array(this.ySerie.length).fill(this.metaMora);
                this.barChartData = clone;
              },
              err=> {
                console.log(err);
              }
            );
        },
        err=> {
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
