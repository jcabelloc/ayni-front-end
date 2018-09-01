import { CuotaCredito } from "../../../../creditos/consulta-credito/models/CuotaCredito";

export interface AmortizacionCuota extends CuotaCredito {
    amortizacionCapital: number;
    amortizacionInteres: number;
}