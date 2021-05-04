import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  //Qué componentes hay dentro de este módulo
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],

  //que quiero que se vea fuera del modulo
  exports:[
    ListadoComponent
  ],

  //módulos que necesito
  imports: [
    CommonModule
  ]



})

export class HeroesModule{}
