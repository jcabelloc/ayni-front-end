import { Component, OnInit, Input } from '@angular/core';
import { CarteraService } from '../../services/cartera.service';

@Component({
  selector: 'app-chart-desembolsos',
  templateUrl: './chart-desembolsos.component.html',
  styleUrls: ['./chart-desembolsos.component.css']
})
export class ChartDesembolsosComponent implements OnInit {

  @Input() valor: string;
  @Input() meta: number;

  xSerie: string[] = [];
  yMeta: number[] = [];
  yValor: number[] = [];
  yValorAcumulado: number[] = [];
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
    {data: [], label: 'Desembolsos '},
    {data: [], label: 'Acumulado '},
    {data: [], label: 'Meta Mes', type: 'line'},
  ];

  
  constructor(private carteraService: CarteraService) { }

  ngOnInit() {
    this.fechaHasta.setDate((new Date()).getDate());
    this.fechaDesde = new Date(this.fechaHasta.getFullYear(), this.fechaHasta.getMonth(), 1); // first day of the month
    let desde = this.fechaDesde.toISOString().split("T")[0];
    let hasta = this.fechaHasta.toISOString().split("T")[0];

    this.carteraService.queryDesembolsos(this.valor, desde, hasta, 'diaMes')
      .subscribe(
        XYSerie => {
          this.xSerie = XYSerie.xSerie;
          let yAcc = [];
          XYSerie.ySerie.reduce(
            function(acc,cur,i) {return yAcc[i] = acc + cur; },0)
          ;
          this.yValorAcumulado = yAcc;
          this.barChartLabels.length = 0;
          for (let i = 0; i < this.xSerie.length ; i++) {
              this.barChartLabels.push(this.xSerie[i]);
          }
          let clone = JSON.parse(JSON.stringify(this.barChartData));
          clone[0].data = XYSerie.ySerie;
          clone[0].label += (this.valor=='count')?'Nro.':'Monto';
          clone[1].data = this.yValorAcumulado;
          clone[2].data = new Array(this.xSerie.length).fill(this.meta);
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
