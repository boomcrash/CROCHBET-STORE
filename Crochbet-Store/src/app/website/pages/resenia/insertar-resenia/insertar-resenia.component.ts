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
    apellido: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]{2,30}')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });
  id: number = 0;
  email: string = '';
  nombre: string = '';
  apellido: string = '';
  mensaje: string = '';
  clienteId: number = 0;

constructor( public http:HttpClient ) {


}
  dataSource:any=[];
  reseñasObject=ReseñaModule.reseñas;
  resenas: any[] = [];
  cliente: any[] = [];
  /**
   * METODO PARA QUE OBTENGA LOS 3 PRIMEROS RESEÑAS DE LA BASE DE DATOS Y LAS MUESTRE EN EL FORMULARIO DE INSERTAR RESEÑA
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

  onSubmit() {
    let servicio = new ResenasService(this.http);
    servicio.GetClienteByUserId(this.clienteId).subscribe((data:any)=>{

      console.log("Datos de cliente",data);
      if(data== false){
        let servicioGet = new ResenasService(this.http)
        let miResena: Reseña = {
          idResena: this.reseñasObject.length+1,
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          mensaje: this.mensaje,
          clienteId: this.clienteId
        }
        console.log(miResena)
        servicioGet.addResena(miResena).subscribe((data:any)=>{
          console.log("Insertado",data);
          Swal.fire({
            title: 'INSERTADO EXITOSAMENTE',
            text: 'Usted ha insertado una nueva Reseña ',// + this.clienteId,
            icon: 'warning', confirmButtonText: 'OK'
          });
          //window.location.reload();
        });
      }
       });
   }


/*
    if (this.formularioResenia.valid) {
      const resena: Reseña = {
        idResena:11 ,
        nombre: this.formularioResenia.value.nombre ?? '',
        apellido: this.formularioResenia.value.apellido ?? '',
        email: this.formularioResenia.value.email ?? '',
        mensaje: this.formularioResenia.value.mensaje ?? '',
        clienteId: 1
      };
      let ResenaS = new ResenasService(this.http);
      ResenaS.addResena(resena).subscribe(
        res => console.log('Reseña agregada correctamente'),
        error => console.log('Error al agregar la reseña')
      );
      this.formularioResenia.reset();
    }
    */
  }



