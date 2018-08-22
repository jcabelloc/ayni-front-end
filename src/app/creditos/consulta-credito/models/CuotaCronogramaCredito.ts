export interface CuotaCronogramaCredito {
    id?: number;
    idCuenta?: number;
    nroCuota: number;
    ctaContable?: String;
    fechaVencimiento: string;
    saldoCapital: number;
    capital: number;
    interes: number;
    montoCuota: number;
}