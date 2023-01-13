import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reseña } from 'src/app/interfaces/reseña';
import { ReseñaModule } from 'src/app/modules/reseña/reseña.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-resenia',
  templateUrl: './editar-resenia.component.html',
  styleUrls: ['./editar-resenia.component.css']
})
export class EditarReseniaComponent {
  nombre:string="";
  email:string="";
  mensaje:string="";

  id=0;
  constructor(public dialogRef: MatDialogRef<EditarReseniaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reseña){
      this.id=data.id;
      console.log(this.id);
      this.nombre=data.nombre;
      this.email=data.email;
      this.mensaje=data.mensaje;
    }

    reseñasObject=ReseñaModule.reseñas;

  ngOnInit(): void {
    
  }

  modificarResenia(){
    for (let index = 0; index < this.reseñasObject.length; index++) {
      if(this.reseñasObject[index].id==this.id){
          this.reseñasObject[index].nombre=this.nombre;
          this.reseñasObject[index].email=this.email;
          this.reseñasObject[index].mensaje=this.mensaje;
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

  salir(){
    this.dialogRef.close();
  }

}
