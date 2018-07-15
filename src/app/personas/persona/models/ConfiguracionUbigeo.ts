export interface ConfiguracionUbigeo {
    departamentos: Departamento[];
}

export interface Departamento {
    id: number;
    codDpto: string;
    nombre: string;
    provincias: Provincia[]
}

export interface Provincia {
    id: number;
    codProvincia: string;
    nombre: string;
    distritos: Distrito [];
}

export interface Distrito {
    id: number;
    nombre: string;
}