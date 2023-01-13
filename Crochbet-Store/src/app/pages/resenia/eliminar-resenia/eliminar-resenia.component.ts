import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReseñaModule } from 'src/app/modules/reseña/reseña.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-resenia',
  templateUrl: './eliminar-resenia.component.html',
  styleUrls: ['./eliminar-resenia.component.css']
})
export class EliminarReseniaComponent {
  id=0;

  constructor(public dialogRef: MatDialogRef<EliminarReseniaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number){
      this.id=data;
      console.log(this.id);
    }


  reseñasObject=ReseñaModule.reseñas;

  ngOnInit(): void {
    
  }

  eliminarResenia(){
    for (let index = 0; index < this.reseñasObject.length; index++) {
      if(this.reseñasObject[index].id==this.id){
        this.reseñasObject.splice(index,1);
        Swal.fire({
          title: 'ELIMINADO EXITOSAMENTE',
          text: 'Usted ha eliminado la reseña con id : '+this.id,
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
