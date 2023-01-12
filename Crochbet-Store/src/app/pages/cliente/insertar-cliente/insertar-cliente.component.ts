import { Component } from '@angular/core';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent {
  constructor() { }
  
  nombre:string="";
  apellido: string='';
  cedula:string="";

  Actualstatus="agregar";

  dataSource:any=[];

  //productObject:ProductoModule=new ProductoModule();

  clientesObject=ClienteModule.clientes;

  onSubmit(){
    let nuevo={
      id: this.clientesObject.length+1,
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula
    }
    ClienteModule.clientes.push(nuevo);
    Swal.fire({
      title: 'INSERTADO EXITOSAMENTE',
      text: 'Usted ha insertado el cliente ',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    this.nombre="";
    this.apellido="";
    this.cedula="";
    
   }
}
