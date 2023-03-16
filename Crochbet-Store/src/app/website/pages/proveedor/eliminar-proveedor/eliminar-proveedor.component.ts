import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProveedorModule } from 'src/app/modules/proveedor/proveedor.module';
import { ProveedoresService } from 'src/app/services/proveedor/proveedores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrls: ['./eliminar-proveedor.component.css']
})
export class EliminarProveedorComponent {
  id=0;

  constructor(public dialogRef: MatDialogRef<EliminarProveedorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private http:HttpClient){
      this.id=data;
      console.log(this.id);
    }


  proveedorObject=ProveedorModule.proveedores;

  ngOnInit(): void {
    
  }

  eliminarProveedor(){

    console.log("id", this.id);
    let servicioEliminar= new ProveedoresService(this.http);
    servicioEliminar.eliminarProveedor(this.id).subscribe({
      next: (data:any)=>{
        console.log(data);
        if(data == true){
          Swal.fire({
            position:'center',
            icon: 'error',
            title: 'Proveedor Eliminado con Exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close();
          window.location.reload()
        }else{
          Swal.fire({
            position:'center',
            icon: 'error',
            title: 'Error al Eliminar el Proveedor',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close();
          window.location.reload()
        }
      },
      error: (error:any)=>{
        console.log(error);
      }
    });    
  }

  salir(){
    this.dialogRef.close();
  }
}
