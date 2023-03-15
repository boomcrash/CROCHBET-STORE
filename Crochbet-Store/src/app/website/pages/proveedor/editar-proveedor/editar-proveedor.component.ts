import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorModule } from 'src/app/modules/proveedor/proveedor.module';
import { ProveedoresService } from 'src/app/services/proveedor/proveedores.service';
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

  id: number=0;
  formReactive: any;
  constructor(private formBuilder:FormBuilder, public dialogRef: MatDialogRef<EditarProveedorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Proveedor, private http:HttpClient ){
      if(data.idProveedor!=undefined 
        && data.nombre!= undefined
        && data.ruc!= undefined
        && data.telefono!= undefined
        && data.correo!= undefined
        && data.direccion!= undefined){

      this.id=data.idProveedor;
      console.log(data.idProveedor);
      this.nombre=data.nombre;
      this.ruc=data.ruc;
      this.telefono=data.telefono;
      this.correo=data.correo;
      this.direccion=data.direccion;

    }

    console.log(this.id, this.nombre, this.ruc, this.telefono, this.correo, this.direccion)
    
      this.formReactive=this.formBuilder.group(
        {
          nombre:['',[Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
          ruc:['',[Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern(/^[0-9]{13}$/i)]],
          telefono:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]{10}$/i)]],
          correo: ['',[Validators.required,Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
          direccion:['',[Validators.required, Validators.maxLength(70)]], 
        }
      )
    }


  proveedorObject=ProveedorModule.proveedores;

  ngOnInit(): void {
    
  }

  modificarProveedor(){
    
    let servicioPut= new ProveedoresService(this.http)
    let miProveedor: Proveedor={
      idProveedor: this.id,
      nombre: this.nombre,
      ruc: this.ruc,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion
    }
    servicioPut.editarProveedor(miProveedor).subscribe((data:any)=>{
      console.log(data);
    
        Swal.fire({
          title: 'OPERACION EXITOSAMENTE',
          text: 'Usted ha completado exitosamente la operacion del proveedor con id : '+this.id,
          icon: 'warning',
          confirmButtonText: 'OK'
        });
        this.dialogRef.close();
        window.location.reload()
      });
    }

    
  

  getValue(value:string){
    return this.formReactive.get(value)
  }

  abrirVentana(input:string){
    if(input=="nombre"){
      Swal.fire(
        "NOMBRE INCORRECTO !",
        "El nombre debe tener un máximo de 40 caracteres <br> Ejemplo: Distribuidora:Lanas XYZ",
        "error"
      );
    }else if(input=="ruc"){
      Swal.fire(
        "RUC INCORRECTO!",
        "El RUC debe tener un máximo de 13 caracteres <br> Ejemplo: 1234567894001",
        "error"
      );
    }else if(input=="telefono"){
      Swal.fire(
        "TELEFONO INCORRECTO!",
        "El Telefono debe tener un máximo de 10 caracteres <br> Ejemplo: 0978364762",
        "error"
      );
    }else if(input=="correo"){
      Swal.fire(
        "CORREO INCORRECTO!",
        "El Correo debe tener un máximo de 40 caracteres <br> Ejemplo: lanaslolita@gmail.com",
        "error"
      );
    }else if(input=="direccion"){
      Swal.fire(
        "DIRECCION INCORRECTO!",
        "El Direccion debe tener un máximo de 70 caracteres <br> Ejemplo: cdla. Albert gilbert mz.972 vll. 5",
        "error"
      );
    }
  }

  salir(){
    this.dialogRef.close();
  }
}
