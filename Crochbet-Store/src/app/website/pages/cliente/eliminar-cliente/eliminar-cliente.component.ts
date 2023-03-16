import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { ClientesService } from 'src/app/services/cliente/clientes.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent {

  id=0;

  constructor(public dialogRef: MatDialogRef<EliminarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private http:HttpClient){
      this.id=data;
      console.log(this.id);
    }


  clientesObject=ClienteModule.clientes;

  ngOnInit(): void {}

  eliminarCliente(){
    console.log("id", this.id);
    let servicios =new ClientesService(this.http);

    servicios.DeleteCliente(this.id).subscribe({
      next: (data:any) =>{
        console.log(data);
        if (data == true){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cliente eliminado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close();
        }else{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cliente eliminado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close();
        }
      },
      error: (error:any) =>{
        console.log(error);
      }
    });
  }

  salir(){
    this.dialogRef.close();
  }

}
