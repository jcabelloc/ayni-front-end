export interface Cliente {
    id?: number;
    fechaRegistro?: string;
    fechaAfiliacion?: string;
    tipoIdentificacion: string;
    nroIdentificacion: string;
    primerNombre: string;
    segundoNombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    nombre: string;
    sexo: string;
    fechaNacimiento: string;
	email: string;
	estadoCivil: string;
}