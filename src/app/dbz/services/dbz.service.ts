import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

//el decorador que tiene un servicio es de tipo injectable, hay que importarlo
//esto nos dice que es una clase que se puede inyectar
@Injectable()
export class DbzService{

  //propiedades

  //la barra baja indica en el nombre que es una propiedad privada
  private _personajes: Personaje[]= [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  //getters & setters
  get personajes(): Personaje[]{
    return [...this._personajes];
  }

  //constructor
  constructor(){}

  //métodos
  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }

}
