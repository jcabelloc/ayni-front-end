import { Cliente } from "../../../clientes/adm-cliente/models/Cliente";

export interface Credito {
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