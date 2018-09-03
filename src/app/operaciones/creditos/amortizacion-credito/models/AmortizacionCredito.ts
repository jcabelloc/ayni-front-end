interface DetalleBanco {
    id?: number;
    nroOperacion: string;
    fechaOperacion: string;
    montoOperacion: number;
}

export interface AmortizacionCredito {
    idOperacion?: number;
    idCuenta: number;
    moneda: string;
    montoAmortizacion: number;
    tipoCuentaRecaudo?: string;
    idCuentaRecaudo?: number;
    detalleBanco?: DetalleBanco;

}