import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Proveedor } from 'src/app/interfaces/proveedor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProveedorModule { 

static proveedores:Proveedor[]=[];

  filtrpoTitulo:Proveedor[] = [];
  constructor(){
    console.log('ProveedorModule');
  }
}