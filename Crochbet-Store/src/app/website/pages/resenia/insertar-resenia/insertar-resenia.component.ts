import { Component, OnInit } from '@angular/core';
import { ReseñaModule } from 'src/app/modules/reseña/reseña.module';
import Swal from 'sweetalert2';
import {  FormBuilder, FormControl, FormGroup, NgForm, Validators  } from '@angular/forms';
import { ResenasService } from 'src/app/services/resena/resenas.service';
import { HttpClient } from '@angular/common/http';
import { Reseña } from 'src/app/interfaces/reseña';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-insertar-resenia',
  templateUrl: './insertar-resenia.component.html',
  styleUrls: ['./insertar-resenia.component.css']
})
export class InsertarReseniaComponent{
  formularioResenia = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,10}')]),
    apellido: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]{2,10}')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });
constructor( public http:HttpClient ) {


}
  dataSource:any=[];
  reseñasObject:Reseña[]=[];
  resenas: any[] = [];
  /**
   * METODO PARA QUE OBTENGA LOS 3 PRIMEROS RESEÑAS DE LA BASE DE DATOS Y LAS MUESTRE EN EL FORMULARIO DE INSERTAR RESEÑA
  [(ngModel)]=""
  */
  ngOnInit() {
    let reseñas=new ResenasService(this.http);
   reseñas.getResenaforDivs().subscribe(
      (data: any) => {
        this.resenas = data.slice(0, 3);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSubmit(): void {
    if (this.formularioResenia.valid) {
      const resena: Reseña = {
        idResena: 0,
        nombre: this.formularioResenia.value.nombre ?? '',
        apellido: this.formularioResenia.value.apellido ?? '',
        email: this.formularioResenia.value.email ?? '',
        mensaje: this.formularioResenia.value.mensaje ?? ''
      };
      let ResenaS = new ResenasService(this.http);
      ResenaS.addResena(resena).subscribe(
        res => console.log('Reseña agregada correctamente'),
        error => console.log('Error al agregar la reseña')
      );
      this.formularioResenia.reset();
    }
  }

}
