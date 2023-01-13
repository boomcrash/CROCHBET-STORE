import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorModule } from 'src/app/modules/proveedor/proveedor.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent {
  nombre:string="";
  ruc:string="";
  telefono:string="";
  correo:string="";
  direccion:string="";

  id=0;
  formReactive: any;
  constructor(public dialogRef: MatDialogRef<EditarProveedorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Proveedor){
      this.id=data.id;
      console.log(this.id);
      this.nombre=data.nombre;
      this.ruc=data.ruc;
      this.telefono=data.telefono;
      this.correo=data.correo;
      this.direccion=data.direccion;
    }


  proveedorObject=ProveedorModule.proveedores;

  ngOnInit(): void {
    
  }

  modificarProveedor(){
    for (let index = 0; index < this.proveedorObject.length; index++) {
      if(this.proveedorObject[index].id==this.id){
        this.proveedorObject[index].nombre=this.nombre;
        this.proveedorObject[index].ruc=this.ruc;
        this.proveedorObject[index].telefono=this.telefono;
        this.proveedorObject[index].correo=this.correo;
        this.proveedorObject[index].direccion=this.direccion;
        Swal.fire({
          title: 'EDITADO EXITOSAMENTE',
          text: 'Usted ha editado el proveedor con id : '+this.id,
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
