interface DetalleBanco {
    id?: number;
    nroOperacion?: string;
    fechaOperacion?: string;
    montoOperacion?: number;
}

interface DetalleOperacion{
    id: number;
    nroDetalle: number; 
    idCuenta: number; 
    ctaContable: string; 
    tipoCuenta: "BANCOS";
    debito: number;
    credito: number;

}

export interface TraspasoEfectivo {
    id?: number;
    monto?: number;
    moneda?: string;
    fechaOperacion?: string;
    horaOperacion?: string;
    usuario?: string;
    tipoOperacion?: string;
    nota?: string;
    idCuentaCaja?: number;
    idCuentaBanco?: number;
    detalleBanco?: DetalleBanco;
    detallesOperacion?: DetalleOperacion[];

}