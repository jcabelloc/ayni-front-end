import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSelectChange } from '@angular/material';
import { SearchProveedorComponent } from '../../../../../proveedores/shared-proveedor/components/search-proveedor/search-proveedor.component';
import { ProveedorService } from '../../../../../proveedores/adm-proveedor/services/proveedor.service';
import { Proveedor } from '../../../../../proveedores/shared-proveedor/models/Proveedor';
import { RegistroGasto } from '../../models/RegistroGasto';
import { CuentaGastoService } from '../../../../../gastos/adm-cuenta-gasto/services/cuenta-gasto.service';
import { CuentaGasto } from '../../../../../gastos/adm-cuenta-gasto/models/CuentaGasto';
import { RegistroGastoService } from '../../services/registro-gasto.service';
import { Router } from '@angular/router';

interface Option {
  value: string;
  viewValue: string;
}


interface CuentaEgreso {
  idCuenta: number;
  descripcion: string;
}

@Component({
  selector: 'app-create-registro-gasto',
  templateUrl: './create-registro-gasto.component.html',
  styleUrls: ['./create-registro-gasto.component.css']
})
export class CreateRegistroGastoComponent implements OnInit {

  registroGasto: RegistroGasto = {
    proveedor: {},
    operacion: {moneda: '1'},
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
  
  tiposComprobante: Option[] = [
    {value: 'BOLETA', viewValue: 'Boleta'},
    {value: 'FACTURA', viewValue: 'Factura'},
    {value: 'TICKET', viewValue: 'Ticket'},
    {value: 'RECIBO', viewValue: 'Recibo'},
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

  cuentasEgreso: CuentaEgreso[];

  
  isRecaudoBanco: boolean = false;

  constructor( public dialog: MatDialog, 
    private proveedorService: ProveedorService,
    private cuentaGastoService: CuentaGastoService,
    private registroGastoService: RegistroGastoService,
    private router: Router,
    ) 
    { }

  ngOnInit() {
    this.cuentaGastoService.findAllCuentasGasto()
    .subscribe(
      cuentasGasto => {
        this.cuentasGasto = cuentasGasto;
      },
      err => {
        console.log(err);
      }
    );
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

  onTipoCuentaEgresoSelection(tipoCuentaEgreso: MatSelectChange){
    this.isRecaudoBanco = false;
    this.registroGasto.operacion.idCuentaEgreso = null;
    this.registroGasto.detalleBanco = {};
    if(tipoCuentaEgreso.value == 'BANCOS') {
      this.isRecaudoBanco = true;
      this.cuentasEgreso = [
        {idCuenta: 10000002, descripcion: 'BCP - 4352477093079'},
      ];
      this.registroGasto.detalleBanco.fechaOperacion = this.getStringLocalDate(new Date());
      this.registroGasto.detalleBanco.montoOperacion = this.registroGasto.operacion.monto;
    }
    else if (tipoCuentaEgreso.value == 'CAJA') {
      this.cuentasEgreso = [
        {idCuenta: 10000001, descripcion: 'CAJA NVA. CAJAMARCA - OAJON'},
      ];
    }
  }
  getStringLocalDate(fecha: Date): string {
    let fechaString: string;
    fechaString = fecha.getFullYear() + "-" + (fecha.getMonth() + 1).toString().padStart(2,"0") + "-" + fecha.getDate().toString().padStart(2,"0");
    return fechaString;
  }

  onSubmit({value, valid}: {value: RegistroGasto, valid: boolean}){
    if (valid) {
      this.registroGastoService.createGasto(this.registroGasto)
        .subscribe(
          registroGasto => {
            this.router.navigate(['operaciones/administrativas/registro-gasto/show/' + registroGasto.id ]); 
          },
          err => {
            console.log(err);
          }

        )
        
    }
    
  }

}
