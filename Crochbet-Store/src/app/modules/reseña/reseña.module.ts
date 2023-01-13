import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reseña } from 'src/app/interfaces/reseña';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReseñaModule {
  static reseñas:Reseña[]=[
    {id:1,nombre:'manolo',email:'jazmin',mensaje:'cuando traen nuevos modelos?'},
    {id:2,nombre:'juan',email:'jazminpinto@gmail,com',mensaje:'bonitos diseños, pero deberian agregar mas :3'},
    {id:3,nombre:'Austin',email:'pedroZola2000@gmail,com',mensaje:'bonitos diseños, expondran mas ahora que viene el carnaval?'},

  ]
 }
