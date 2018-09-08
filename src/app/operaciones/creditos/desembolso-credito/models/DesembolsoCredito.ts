export interface Cliente {
    id: number;
    nombre: string;
    tipoIdentificacion: string;
    nroIdentificacion: string;
} 

export interface DesembolsoCredito {
    id?: number;
    montoDesembolso: number;
    moneda: string;
    frecuencia: string;
    tem: number;
    nroCuotas: number;
    fechaDesembolso: string;
    fechaPrimeraCuota: string;
    cliente?: Cliente;
    tipoCuentaDesembolso?: string; 
    idCuentaDesembolso?: number;
    cuentaDesembolsoDescripcion?: string;
    usuarioAprobador?: string;
    responsableCuenta?: string;
    usuarioOperacion?: string;
    fechaOperacion?: string;
    horaOperacion?: string;
    idCuenta?: number;
}