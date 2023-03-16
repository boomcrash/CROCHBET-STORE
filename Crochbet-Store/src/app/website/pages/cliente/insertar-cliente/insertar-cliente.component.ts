import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import Swal from 'sweetalert2';
import { ClientesService } from 'src/app/services/cliente/clientes.service';
import { Cliente } from 'src/app/interfaces/cliente';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent {


  formReactive:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,public http:HttpClient,) {
    this.formReactive=this.formBuilder.group(
      {
        nombre:['',[Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i)]],//Validators.pattern("[A-Za-z]")
        apellido:['',[Validators.required,Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i) ]],
        ciudad:['',[Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
        direccion:['',[Validators.required,Validators.maxLength(20)]],
        telefono:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(/^[0-9]{10}$/i)]],
        correo: ['',[Validators.required,Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
        usuarioId: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/^[1-9]{1}[0-9]{0,4}$/i)]]
      }
    )
  }

  nombre:string="";
  apellido: string='';
  ciudad:string="";
  direccion:string="";
  telefono: string='';
  correo: string='';
  usuarioId: number = 0;
  id: number =0;

  Actualstatus="agregar";

  dataSource:any=[];

  //productObject:ProductoModule=new ProductoModule();

  clientesObject=ClienteModule.clientes;

  onSubmit(){
    let servicio = new ClientesService(this.http);
    servicio.GetClienteByUserId(this.usuarioId).subscribe((data:any)=>{
      console.log("Datos de usuario",data);
      if(data== false){
        let servicioGet = new ClientesService(this.http)
        let miCliente: Cliente = {
          idCliente: this.clientesObject.length+1,
          nombre: this.nombre,
          apellido: this.apellido,
          ciudad: this.ciudad,
          direccion: this.direccion,
          telefono: this.telefono,
          correo: this.correo,
          usuarioId: this.usuarioId
        }
        console.log(miCliente)
        servicioGet.agregarCliente(miCliente).subscribe((data:any)=>{
          console.log("Insertado",data);
          Swal.fire({
            title: 'INSERTADO EXITOSAMENTE',
            text: 'Usted ha insertado el usuario con id : '  + this.usuarioId,
            icon: 'warning', confirmButtonText: 'OK'
          });
          window.location.reload();
        });
      }else{
        Swal.fire({
          title: 'ERROR',
            text: 'El usuario con id : ' + this.usuarioId + ' ya tiene asociado un cliente',
            icon: 'warning', confirmButtonText: 'OK'
        });
      }
    });
   }

   getValue(value:string){
    return this.formReactive.get(value)
  }

  abrirVentana(input:string){
    if(input=="nombre"){
      Swal.fire(
        "NOMBRE INCORRECTO !",
        "El nombre no debe tener un mas de 20 caracteres, y no incluye números <br> Ejemplo: Ruth Maria",
        "error"
      );
    }else if(input=="apellido"){
      Swal.fire(
        "NOMBRE INCORRECTO !",
        "El apellido no debe tener un mas de 20 caracteres, y no incluye números <br> Ejemplo: Quito Yambay",
        "error"
      );
    }else if(input=="direccion"){
      Swal.fire(
        "DIRECCIÓN INCORRECTO !",
        "Debe ingresar su dirección<br> Ejemplo: Coop. Juan Pablo II",
        "error"
      );
    }else if(input=="ciudad"){
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "Debe llenar este campo con ciudades ecuatorianas<br>",
        "error"
      );
    }else if(input== "telefono"){
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "El telefono debe: <br>1.- Tener un max. de 10 números <br> Ejemplo: 0934299134",
        "error"
      );
    }else if(input== "correo"){
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "Ingrese correctamente su correo: <br>Ejemplo: ruth11@gmail.com",
        "error"
      );
    }

  }
}
