export interface AmortizacionCredito {
    idOperacion?: number;
    idCuenta: number;
    montoAmortizacion: number;
    viaRecaudo?: string;
    idCuentaRecaudo?: number;

}