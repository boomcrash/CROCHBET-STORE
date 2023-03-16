import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReseñaModule } from 'src/app/modules/reseña/reseña.module';
import Swal from 'sweetalert2';
import { ResenasService } from 'src/app/services/resena/resenas.service';

@Component({
  selector: 'app-eliminar-resenia',
  templateUrl: './eliminar-resenia.component.html',
  styleUrls: ['./eliminar-resenia.component.css']
})
export class EliminarReseniaComponent {
  id=0;

  constructor(public dialogRef: MatDialogRef<EliminarReseniaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,public http:HttpClient) {
      this.id=data;
      console.log(this.id);
    }


 // reseñasObject=ReseñaModule.reseñas;

  ngOnInit(): void {

  }
//

//
  eliminarResenia(){
    let reseñas=new ResenasService(this.http);
  reseñas.deleteResena(this.id).subscribe(()=>{
  console.log("Reseña eliminada");
  });
        Swal.fire({
          title: 'ELIMINADO EXITOSAMENTE',
          text: 'Usted ha eliminado la reseña con id : '+this.id,
          icon: 'warning',
          confirmButtonText: 'OK'
        });
        this.dialogRef.close();
      }


  salir(){
    this.dialogRef.close();
  }
}
