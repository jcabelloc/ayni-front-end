import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSelectChange } from '@angular/material';
import { SearchProveedorComponent } from '../../../../../proveedores/shared-proveedor/components/search-proveedor/search-proveedor.component';
import { ProveedorService } from '../../../../../proveedores/adm-proveedor/services/proveedor.service';
import { Proveedor } from '../../../../../proveedores/shared-proveedor/models/Proveedor';
import { RegistroGasto } from '../../models/RegistroGasto';
import { CuentaGastoService } from '../../../../../gastos/adm-cuenta-gasto/services/cuenta-gasto.service';
import { CuentaGasto } from '../../../../../gastos/adm-cuenta-gasto/models/CuentaGasto';

export interface Option {
  value: string;
  viewValue: string;
}
/*
export interface Proveedor {
  tipoIdentificacion: string;
  nroIdentificacion: string;
  nombre: string;
  cuenta: string;
}

*/
/*
export interface Gasto {
  rubro: string,
  nota: string,
}
*/

@Component({
  selector: 'app-create-registro-gasto',
  templateUrl: './create-registro-gasto.component.html',
  styleUrls: ['./create-registro-gasto.component.css']
})
export class CreateRegistroGastoComponent implements OnInit {

  registroGasto: RegistroGasto = {
    proveedor: {},
    operacion: {},
    detalleBanco: {},
  };
  rubro: string;

  cuentasGasto: CuentaGasto[];

  rubros: Option[] = [
    {value: 'HONORARIOS', viewValue: 'Honorarios'},
    {value: 'ALQUILERES', viewValue: 'Alquileres'},
    {value: 'SUMINISTROS_DIVERSOS', viewValue: 'Suministros Diversos'},
    {value: 'COMUNICACIONES', viewValue: 'Comunicaciones'},
    {value: 'REPARACION_MANTENIMIENTO', viewValue: 'Reparacion y Mantenimiento'},
    {value: 'OTROS_SERVICIOS', viewValue: 'Otros Servicios'},
  ];

  tipoDocs: Option[] = [
    {value: 'DNI', viewValue: 'DNI'},
    {value: 'RUC', viewValue: 'RUC'},
  ];

  cuentas: Option[];

  autorizadores: Option[] = [
    {value: 'GRIOS', viewValue: 'grios'},
    {value: 'EPEREZ', viewValue: 'eperez'},
    {value: 'MFERNANDEZ', viewValue: 'mfernandez'},
    {value: 'JCABELLOC', viewValue: 'jcabelloc'},
  ];

  
  tiposCuentaEgreso: Option[] = [
    {value: 'CAJA', viewValue: 'CAJA'},
    {value: 'BANCOS', viewValue: 'BANCOS'},
  ];

  cuentasEgreso: Option[] = [
    {value: '10000053', viewValue: '10000053'},
    {value: '10000189', viewValue: '10000189'},
  ];

  
  isRecaudoBanco: boolean = true;

  constructor( public dialog: MatDialog, 
    private proveedorService: ProveedorService,
    private cuentaGastoService: CuentaGastoService,
    ) 
    { }

  ngOnInit() {
  }

  searchProveedor(): void {
    const dialogRef = this.dialog.open(SearchProveedorComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(idProveedor => {
      if (idProveedor) {
        console.log(idProveedor);
        
        this.proveedorService.findProveedorById(idProveedor)
          .subscribe (
            proveedor => {
              this.registroGasto.proveedor = { 
                id : proveedor.id, 
                nombre: proveedor.nombre, 
                tipoIdentificacion: proveedor.tipoIdentificacion,
                nroIdentificacion: proveedor.nroIdentificacion,
                tipoPersona: proveedor.tipoPersona,
              };
            },
            err => {
              console.log(err);
            }
          );
        this.cuentaGastoService.findCuentasGastoByIdProveedor(idProveedor)
          .subscribe(
            cuentasGasto => {
              this.cuentasGasto = cuentasGasto;
            },
            err => {
              console.log(err);
            }
          );
      }
    });
  }

  onRubroSelection(rubro: MatSelectChange) {
    this.cuentas = [];
    this.cuentasGasto
      .filter(e => e.tipoCuenta == rubro.value)
      .forEach (
        e => {
          this.cuentas.push({value: String(e.idCuenta), viewValue: String(e.idCuenta)}
          )
        }
      );
  }

}
