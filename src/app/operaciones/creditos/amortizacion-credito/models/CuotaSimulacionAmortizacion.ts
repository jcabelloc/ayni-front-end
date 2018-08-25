import { CuotaCronogramaCredito } from "../../../../creditos/consulta-credito/models/CuotaCronogramaCredito";

export interface CuotaSimulacionAmortizacion extends CuotaCronogramaCredito {
    amortizacionCapital: number;
    amortizacionInteres: number;
}