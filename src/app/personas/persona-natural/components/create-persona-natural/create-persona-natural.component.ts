import { Component, OnInit } from '@angular/core';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-persona-natural',
  templateUrl: './create-persona-natural.component.html',
  styleUrls: ['./create-persona-natural.component.css']
})
export class CreatePersonaNaturalComponent implements OnInit {
  sexos: Option[] = [
    {value: 'MASCULINO', viewValue: 'Masculino'},
    {value: 'FEMENINO', viewValue: 'Femenino'},
  ];
  civilEstados: Option[] = [
    {value: 'SOLTERO', viewValue: 'Soltero'},
    {value: 'CASADO', viewValue: 'Casado'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
