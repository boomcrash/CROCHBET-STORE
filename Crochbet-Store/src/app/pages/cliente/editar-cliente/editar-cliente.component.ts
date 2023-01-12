import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/interfaces/cliente';
import { Product } from 'src/app/interfaces/product';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
 

  nombre:string="";
  apellido:string="";
  cedula:string="";

  id=0;

  constructor(public dialogRef: MatDialogRef<EditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente){
      this.id=data.id;
      console.log(this.id);
      this.nombre=data.nombre;
      this.apellido=data.apellido;
      this.cedula=data.cedula;
    }


  clientesObject=ClienteModule.clientes;

  ngOnInit(): void {
    
  }

  modificarCliente(){
    for (let index = 0; index < this.clientesObject.length; index++) {
      if(this.clientesObject[index].id==this.id){
          this.clientesObject[index].nombre=this.nombre;
          this.clientesObject[index].apellido=this.apellido;
          this.clientesObject[index].cedula=this.cedula;
        Swal.fire({
          title: 'EDITADO EXITOSAMENTE',
          text: 'Usted ha editado el cliente con id : '+this.id,
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
