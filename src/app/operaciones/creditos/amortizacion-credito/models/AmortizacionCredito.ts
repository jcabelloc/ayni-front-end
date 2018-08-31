export interface AmortizacionCredito {
    idOperacion?: number;
    idCuenta: number;
    moneda: string;
    montoAmortizacion: number;
    viaRecaudo?: string;
    idCuentaRecaudo?: number;

}