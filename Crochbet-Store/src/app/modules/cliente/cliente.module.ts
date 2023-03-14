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

  static clientes:Cliente[]=[];

  filtrpoTitulo:Cliente[] = [];
  constructor(){
    console.log('ClienteModule');
  }
}
