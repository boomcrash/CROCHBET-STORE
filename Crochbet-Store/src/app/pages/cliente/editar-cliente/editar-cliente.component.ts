import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

  nombre:string="";
  apellido:string="";
  ciudad:string="";
  direccion:string="";
  telefono: string='';
  correo: string = ""

  id=0;
  formReactive: any;

  constructor(public dialogRef: MatDialogRef<EditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente){
      this.id=data.id;
      console.log(this.id);
      this.nombre=data.nombre;
      this.apellido=data.apellido;
      this.ciudad=data.ciudad;
      this.direccion=data.direccion;
      this.telefono=data.telefono;
      this.correo=data.correo;

    }



  clientesObject=ClienteModule.clientes;

  ngOnInit(): void {

  }

  modificarCliente(){
    for (let index = 0; index < this.clientesObject.length; index++) {
      if(this.clientesObject[index].id==this.id){
          this.clientesObject[index].nombre=this.nombre;
          this.clientesObject[index].apellido=this.apellido;
          this.clientesObject[index].ciudad=this.ciudad;
          this.clientesObject[index].direccion=this.direccion;
          this.clientesObject[index].telefono=this.telefono;
          this.clientesObject[index].correo=this.correo;
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
