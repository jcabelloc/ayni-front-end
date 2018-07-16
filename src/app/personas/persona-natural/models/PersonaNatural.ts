export interface PersonaNatural {
    id?: number;
    tipoIdentificacion: string;
    nroIdentificacion: string;
    primerNombre: string;
    segundoNombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    nombre?: string;
    sexo: string;
    fechaNacimiento: string;
	email: string;
	estadoCivil: string;
}