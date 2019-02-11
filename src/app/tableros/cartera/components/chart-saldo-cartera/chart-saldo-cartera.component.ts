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
  bol: boolean = false;

  constructor(private carteraService: CarteraService) { }

  ngOnInit() {
    this.carteraService.queryCartera('saldoCapital', 'Febrero', 'diaMes')
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
          this.barChartData = clone;
        },
        err => {
          console.log(err);
        }
      )
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = this.xSerie;
  
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: this.ySerie, label: 'Saldo de Cartera'},
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
