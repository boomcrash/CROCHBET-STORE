import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces/product';
import { Cliente } from 'src/app/interfaces/cliente';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductoModule { 

  static productos:Product[]=[];

  filtrpoTitulo:Product[] = [];
  static categorias: string[] = [];
  constructor(){
    console.log('ProductoModule');
  }

}
