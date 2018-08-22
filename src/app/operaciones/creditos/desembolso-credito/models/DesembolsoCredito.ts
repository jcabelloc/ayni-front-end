export interface Cliente {
    id: number;
    nombre: string;
    tipoIdentificacion: string;
    nroIdentificacion: string;
} 

export interface DesembolsoCredito {
    montoDesembolso: number;
    moneda: string;
    frecuencia: string;
    tem: number;
    nroCuotas: number;
    fechaDesembolso: string;
    fechaPrimeraCuota: string;
    cliente?: Cliente;
    viaDesembolso?: string; 
    idCuentaDesembolso?: number;
    cuentaDesembolsoDescripcion?: string;
    usuarioAprobador?: string;
    responsableCuenta?: string;
}