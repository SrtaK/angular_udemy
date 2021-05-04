import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Thor', 'Hulk', 'Storm', 'Antman', 'Wonder Woman'];
  heroeBorrado: string;


  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift();
    console.log('Se ha borrado un héroe del listado:' + this.heroeBorrado);
  }

}
