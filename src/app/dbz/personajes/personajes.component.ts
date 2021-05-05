import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = []; //importo los personajes del main component

  get personajes(){
    return this.dbzservice.personajes
  }
  //inyectamos el servicio:
  constructor(private dbzservice:DbzService){  }

}
