interface Cliente {
    id: number;
    nombre: string;
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
    idCliente: number;
    idResponsableCuenta: number;
    cliente: Cliente;
}

