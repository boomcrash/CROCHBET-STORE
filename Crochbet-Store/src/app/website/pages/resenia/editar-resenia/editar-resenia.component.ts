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
  resenaId=0;
  clienteId=0;
  cResenasObject = ReseñaModule.reseñas;
  constructor(public dialogRef: MatDialogRef<EditarReseniaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reseña,public http:HttpClient){

    }
    getValue(value: string) {
      return this.formularioEditarResenia.get(value)
    }
    modificarResena() {
      let service = new  ResenasService(this.http);
      service.GetClienteByUserId(this.clienteId).subscribe((data: any) => {
        console.log(data);
        if (data.length > 0) {
          let servicioPut = new ResenasService(this.http)
          let miResena: Reseña = {
            idResena: this.resenaId,
            nombre: this.nombre,
            apellido: this.apellido,
           email: this.email,
            mensaje: this.mensaje,
            clienteId: this.clienteId
          }
          console.log(miResena)
          servicioPut.putResena(miResena).subscribe((data: any) => {
            console.log("Editado",data);
            Swal.fire({
              title: 'EDITADO EXITOSAMENTE',
              text: 'Usted ha editado la reseña con id : ' + this.resenaId,
              icon: 'warning', confirmButtonText: 'OK'
            });
            this.dialogRef.close();
            window.location.reload();
          });

          } else {
            Swal.fire({
              title: 'ERROR',
              text: 'La reseña con id : ' + this.resenaId + ' no existe',
              icon: 'warning', confirmButtonText: 'OK'
            });
            this.dialogRef.close();
          }
      });
    }

   // reseniasObject=ReseñaModule.reseñas;
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
