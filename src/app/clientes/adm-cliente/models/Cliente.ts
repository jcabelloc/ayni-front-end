import { PersonaNatural } from "../../../personas/persona-natural/models/PersonaNatural";

export interface Cliente {
    id?: number;
    fechaRegistro?: string;
    fechaAfiliacion?: string;
    personaNatural: PersonaNatural;
}