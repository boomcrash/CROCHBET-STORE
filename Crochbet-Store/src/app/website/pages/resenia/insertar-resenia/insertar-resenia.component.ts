import { Component } from '@angular/core';
import { ReseñaModule } from 'src/app/modules/reseña/reseña.module';
import Swal from 'sweetalert2';
import {  FormControl, FormGroup, NgForm, Validators  } from '@angular/forms';


@Component({
  selector: 'app-insertar-resenia',
  templateUrl: './insertar-resenia.component.html',
  styleUrls: ['./insertar-resenia.component.css']
})
export class InsertarReseniaComponent {
  formularioResenia = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,10}')]),
    apellido: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]{2,10}')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

constructor() {}
  nombre:string="";
  apellido:string="";
  email: string="";
  mensaje:string="";
 
  dataSource:any=[];
  reseniasObject=ReseñaModule.reseñas;

  onSubmit(){
    if(this.formularioResenia.valid){
    let nuevo={
      id: this.reseniasObject.length+1,
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      mensaje: this.mensaje,
    }
    ReseñaModule.reseñas.push(nuevo);
    Swal.fire({
      title: 'INSERTADO EXITOSAMENTE',
      text: 'Usted ha insertado el producto ',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    this.nombre="";
    this.apellido="";
    this.email="";
    this.mensaje="";
   }
  }
  
}
