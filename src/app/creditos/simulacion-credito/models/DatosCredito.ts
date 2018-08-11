import { Cliente } from "../../../clientes/adm-cliente/models/Cliente";

export interface DatosCredito {
    montoDesembolso: number;
    frecuencia: string;
    tem: number;
    nroCuotas: number;
    fechaDesembolso: string;
    fechaPrimeraCuota: string;
    cliente?: Cliente;
}