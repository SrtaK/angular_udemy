import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent{

  //importo info
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  constructor(private dbzService: DbzService){

  }


  //Exporto info
/*   @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();*/

  agregar(){
  //event.preventDefault(); En Angular no es necesario usar el preventDefault ya que uso el ngSubmit
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);

    //emitiendo un evento
    //this.onNuevoPersonaje.emit(this.nuevo); //lo acepta porque es de tipo Personaje

    this.dbzService.agregarPersonaje(this.nuevo);
    //pongo los datos del nuevo a 0
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
