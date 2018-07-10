import { Injectable } from '@angular/core';
import { PersonaNatural } from '../models/PersonaNatural';

@Injectable({
  providedIn: 'root'
})
export class PersonaNaturalService {

  constructor() { }

  create(personaNatural: PersonaNatural) {
    console.log("Persona Natural cerca a crearse");
    console.log(personaNatural);

  }
}
