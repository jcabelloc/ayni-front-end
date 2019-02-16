interface Cliente {
    id: number;
    nombre: string;
    tipoIdentificacion: string;
    nroIdentificacion: string;
}

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
    nroCondicion: number;
    usuarioResponsable: string;
    analista: string;
    promotor: string;
    cliente: Cliente;
    saldoCapital: number;
}

