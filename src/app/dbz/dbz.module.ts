import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent, //es el único que sale fuera, el ´nuico que hay que expòrtar
    PersonajesComponent,
    AgregarComponent //no es necesario exportarlo
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule //asegurarse de que lo importa de @angular/forms
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
