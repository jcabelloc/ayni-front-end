import { Cliente } from "../../../../clientes/adm-cliente/models/Cliente";

export interface DesembolsoCredito {
    montoDesembolso: number;
    moneda: string;
    frecuencia: string;
    tem: number;
    nroCuotas: number;
    fechaDesembolso: string;
    fechaPrimeraCuota: string;
    cliente?: Cliente;
    usuarioAprobador?: string;
    viaDesembolso?: string; 
}