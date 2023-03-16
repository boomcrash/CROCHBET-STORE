import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reseña } from 'src/app/interfaces/reseña';
import { ReseñaModule } from 'src/app/modules/reseña/reseña.module';
import Swal from 'sweetalert2';
import { ResenasService } from 'src/app/services/resena/resenas.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-resenia',
  templateUrl: './editar-resenia.component.html',
  styleUrls: ['./editar-resenia.component.css']
})
export class EditarReseniaComponent {
  formularioEditarResenia = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,10}')]),
    apellido: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]{2,10}')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });
  nombre:string="";
  apellido:string="";
  email:string="";
  mensaje:string="";

  id=0;
  ResenasService: any;
  constructor(public dialogRef: MatDialogRef<EditarReseniaComponent>,
    /*@Inject(MAT_DIALOG_DATA) public data: Reseña,*/public http:HttpClient){

    }

   // reseniasObject=ReseñaModule.reseñas;

  ngOnInit(): void {

  }
  /*
  editarResenas(resena: Reseña) {
    let reseñas=new ResenasService(this.http);
    reseñas.editarResena(resena).subscribe(
      respuesta => {
        this.id=resena.idResena;
        console.log(this.id);
        this.nombre=resena.nombre;
        this.apellido=resena.apellido;
        this.email=resena.email;
        this.mensaje=resena.mensaje;
        console.log(respuesta);
      },
      error => {
        // Aquí puedes manejar el error si lo deseas
        console.error(error);
      }

    );
    Swal.fire({
      title: 'EDITADO EXITOSAMENTE',
      text: 'Usted ha editado la reseña con id : '+this.id,
      icon: 'warning',
      confirmButtonText: 'OK'
    });
    this.dialogRef.close();
  }
  (ngSubmit)="editarResenas()"
  */
 /* modificarResenia(){
    if(this.formularioEditarResenia.valid){
    for (let index = 0; index < this.reseniasObject.length; index++) {
       if(this.reseniasObject[index].idResena==this.id){
          this.reseniasObject[index].nombre=this.nombre;
          this.reseniasObject[index].apellido=this.apellido;
          this.reseniasObject[index].email=this.email;
          this.reseniasObject[index].mensaje=this.mensaje;
        Swal.fire({
          title: 'EDITADO EXITOSAMENTE',
          text: 'Usted ha editado la reseña con id : '+this.id,
          icon: 'warning',
          confirmButtonText: 'OK'
        });
        this.dialogRef.close();
      }
    }
  }
  }

*/
  salir(){
    this.dialogRef.close();
  }

}
