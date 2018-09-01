export interface AmortizacionCredito {
    idOperacion?: number;
    idCuenta: number;
    moneda: string;
    montoAmortizacion: number;
    tipoCuentaRecaudo?: string;
    idCuentaRecaudo?: number;

}