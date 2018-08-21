export interface Credito {
    idCuenta: number,
    montoDesembolso: number;
    moneda: string;
    frecuencia: string;
    tem: number;
    nroCuotas: number;
    fechaDesembolso: string;
    fechaPrimeraCuota: string;
    usuarioAprobador: string;
    idCliente: number;
    idResponsableCuenta: number;
}