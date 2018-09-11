interface DetalleBanco {
    id?: number;
    nroOperacion: string;
    fechaOperacion: string;
    montoOperacion: number;
}

interface Operacion {
    id?: number;
    monto?: number;
    moneda?: string;
    fechaOperacion?: string;
    horaOperacion?: string;
    usuario?: string;
    tipoOperacion?: string;
    tipoCuentaRecaudo?: string;
    idCuentaRecaudo?: number;
} 

export interface Cliente {
    id: number;
    nombre: string;
    tipoIdentificacion: string;
    nroIdentificacion: string;
} 

export interface AmortizacionCredito {
    idCuenta: number;
    cliente?: Cliente;
    operacion: Operacion;
    detalleBanco?: DetalleBanco;

}