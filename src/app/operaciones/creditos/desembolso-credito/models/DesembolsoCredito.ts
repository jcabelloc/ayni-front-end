interface Credito {
    idCuenta?: number;
    montoDesembolso: number;
    moneda: string; 
    frecuencia: string;
    tem: number;
    nroCuotas: number;
    fechaDesembolso: string;
    fechaPrimeraCuota: string;
    usuarioAprobador?: string;
    usuarioResponsable?: string;
}

interface Operacion {
    id?: number;
    monto?: number;
    moneda?: string;
    fechaOperacion?: string;
    horaOperacion?: string;
    usuario?: string;
    tipoOperacion?: string;
    tipoCuentaDesembolso: string;
    idCuentaDesembolso: number;
    cuentaDesembolsoDescripcion: string;
} 

export interface Cliente {
    id: number;
    nombre: string;
    tipoIdentificacion: string;
    nroIdentificacion: string;
} 

export interface DesembolsoCredito {
    credito: Credito;
    cliente?: Cliente;
    operacion?: Operacion;
}