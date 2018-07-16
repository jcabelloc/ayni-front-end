import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import { Telefono } from '../../models/Telefono';
import { TelefonoService } from '../../services/telefono.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TelefonoForm, Option } from '../../models/TelefonoForm';


@Component({
  selector: 'app-create-telefono',
  templateUrl: './create-telefono.component.html',
  styleUrls: ['./create-telefono.component.css']
})
export class CreateTelefonoComponent implements OnInit {

  telefonoForm: TelefonoForm;

  optionsCodTelefonicoDpto: Option[];
  optionsTipoTelefono: Option[];

  telefono: Telefono = {
    tipo: null,
    codTelefonicoDpto: null,
    numero: null,
  }

  isCreated: boolean = false;

  constructor(
    private telefonoService: TelefonoService,
    public dialogRef: MatDialogRef<CreateTelefonoComponent>,
    @Inject(MAT_DIALOG_DATA) public idPersona: number

  ) { }

  ngOnInit() {
    this.telefonoService.getTelefonoForm(this.idPersona)
    .subscribe (
      telefonoForm => {
        this.telefonoForm = telefonoForm;
        this.optionsTipoTelefono = this.telefonoForm.optionsTipoTelefono;
        this.optionsCodTelefonicoDpto = this.telefonoForm.optionsCodTelefonicoDpto

      },
      err => console.log(err)
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit({value, valid}: {value: Telefono, valid: boolean}) {
    this.telefonoService.createTelefono(this.idPersona, this.telefono)
      .subscribe (
        telefono => { 
          this.isCreated = true;
          this.dialogRef.close(this.isCreated); 
        },
        err => console.log(err)
      );
      
  }
}
