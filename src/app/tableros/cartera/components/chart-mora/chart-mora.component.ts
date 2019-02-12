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
    console.log(this.metaMora);
    console.log(this.diasAtrasoMayorA);

    this.carteraService.queryCarteraSaldo('Febrero', 'diaMes')
      .subscribe(
        XYSerieSaldo => {
          this.xSerie = XYSerieSaldo.xSerie;
          this.carteraService.queryCarteraAtrasada(this.diasAtrasoMayorA, 'Febrero', 'diaMes')
            .subscribe(
              XYSerieAtrasada => {
                console.log(XYSerieAtrasada.ySerie);
                console.log(XYSerieSaldo.ySerie);
                this.ySerie = XYSerieAtrasada.ySerie.map(
                          function(n, i) { return Math.round( n / XYSerieSaldo.ySerie[i] * 100 * 10) / 10; });
                console.log(this.ySerie);
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

}
