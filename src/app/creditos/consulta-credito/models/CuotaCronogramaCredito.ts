export interface CuotaCronogramaCredito {
    id?: number;
    idCuenta?: number;
    nroCuota: number;
    fechaVencimiento: string;
    capitalCredito: number;
    capitalProgramado: number;
    interesProgramado: number;
    capitalPagado: number;
    interesPagado: number;
    montoCuota: number;
}