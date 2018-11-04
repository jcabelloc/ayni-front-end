import { Component, OnInit } from '@angular/core';
import { TraspasoEfectivo } from '../../Models/TraspasoEfectivo';
import { ActivatedRoute } from '@angular/router';
import { TraspasoEfectivoService } from '../../services/traspaso-efectivo.service';

interface TableElement {
  nroDetalle: number;
  idCuenta: number;
  tipoCuenta: string;
  ctaContable: string;
  debito: number;
  credito: number;
}


@Component({
  selector: 'app-show-traspaso-efectivo',
  templateUrl: './show-traspaso-efectivo.component.html',
  styleUrls: ['./show-traspaso-efectivo.component.css']
})
export class ShowTraspasoEfectivoComponent implements OnInit {

  traspaso: TraspasoEfectivo = null;
  dataTable: TableElement[];
  displayedColumns: string[] = ['nroDetalle', 'idCuenta', 'tipoCuenta', 'ctaContable', 'debito', 'credito'];

  constructor(private route: ActivatedRoute, private traspasoEfectivoService: TraspasoEfectivoService) { }

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.traspasoEfectivoService.findTraspasoEfectivoById(id)
    .subscribe(
      traspaso => {
        this.dataTable = [];
        console.log(traspaso);
        this.traspaso = traspaso;
        traspaso.detallesOperacion.forEach(
          e => {
            this.dataTable.push({  
              nroDetalle: e.nroDetalle, 
              idCuenta: e.idCuenta,
              tipoCuenta: e.tipoCuenta,
              ctaContable: e.ctaContable,
              debito: e.debito,
              credito: e.credito,
            });
          }
        )
      },
      err => console.log(err)
    );
  }

}
