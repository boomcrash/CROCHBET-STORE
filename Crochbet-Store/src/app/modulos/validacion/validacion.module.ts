import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ValidacionModule {

    validarUsuario(user:string){
       return "CORRECTO EL USUARIO";
    }
 }
