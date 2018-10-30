interface DetalleBanco {
    id?: number;
    nroOperacion?: string;
    fechaOperacion?: string;
    montoOperacion?: number;
}

interface Operacion {
    id?: number;
    monto?: number;
    moneda?: string;
    fechaOperacion?: string;
    horaOperacion?: string;
    usuario?: string;
    tipoOperacion?: string;
    idCuentaProveedor?: number;
    tipoCuentaEgreso?: string;
    idCuentaEgreso?: number;
    autorizador?: string;
    nota?: string;
} 

interface Proveedor {
    id?: number;
    nombre?: string;
    tipoPersona?: string;
    tipoIdentificacion?: string;
    nroIdentificacion?: string;
} 

export interface RegistroGasto {
    proveedor: Proveedor;
    operacion: Operacion;
    detalleBanco: DetalleBanco;

}