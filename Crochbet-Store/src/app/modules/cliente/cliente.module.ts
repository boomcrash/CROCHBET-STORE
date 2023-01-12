import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from 'src/app/interfaces/cliente';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { 

  static clientes:Cliente[]=[
    {id:1,nombre:'manolo',apellido:'jazmin',cedula:'0000000000'},
    {id:2,nombre:'manolo',apellido:'jazmin',cedula:'0000000000'},
  ]
}
