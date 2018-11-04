import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistroGastoService } from '../../services/registro-gasto.service';
import { RegistroGasto } from '../../models/RegistroGasto';

@Component({
  selector: 'app-show-registro-gasto',
  templateUrl: './show-registro-gasto.component.html',
  styleUrls: ['./show-registro-gasto.component.css']
})
export class ShowRegistroGastoComponent implements OnInit {

  registroGasto: RegistroGasto = null;

  constructor(private route: ActivatedRoute, private registroGastoService: RegistroGastoService,
    ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.registroGastoService.findGastoById(id)
    .subscribe(
      registroGasto => {
        this.registroGasto = registroGasto;
      },
      err => console.log(err)
    )
  }

}
