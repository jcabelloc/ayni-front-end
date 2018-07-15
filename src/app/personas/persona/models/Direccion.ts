export interface Direccion {
    id?: number;
    tipo: string;
    departamento?: string;
    provincia?: string;
    distrito?: string;
    idUbigeo: number;
    tipoVia: string;
    nombreVia: string;
    numeroVia: string;
    tipoLocalidad: string;
    nombreLocalidad: string;
    manzana: string;
    lote: string;
    interior: string;
    referencia: string;
    idUbigeoDpto: number;
	idUbigeoProvincia: number;
    idUbigeoDistrito: number;
    direccion?: string;
}