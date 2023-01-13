import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent {


  formReactive:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,public http:HttpClient) {
    this.formReactive=this.formBuilder.group(
      {
        nombre:['',[Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i)]],//Validators.pattern("[A-Za-z]")
        apellido:['',[Validators.required,Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i) ]],
        ciudad:['',[Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
        direccion:['',[Validators.required,Validators.maxLength(20)]],
        telefono:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(/^[0-9]{10}$/i)]],
        correo: ['',[Validators.required,Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]]
      }
    )
  }

  nombre:string="";
  apellido: string='';
  ciudad:string="";
  direccion:string="";
  telefono: string='';
  correo: string='';

  Actualstatus="agregar";

  dataSource:any=[];

  //productObject:ProductoModule=new ProductoModule();

  clientesObject=ClienteModule.clientes;

  onSubmit(){
    let nuevo={
      id: this.clientesObject.length+1,
      nombre: this.nombre,
      apellido: this.apellido,
      ciudad: this.ciudad,
      direccion: this.direccion,
      telefono: this.telefono,
      correo: this.correo
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
    this.ciudad="";
    this.direccion= "";
    this.telefono= "";
    this.correo="";
    this.existe=false;
   }

   getValue(value:string){
    return this.formReactive.get(value)
  }

  abrirVentana(input:string){
    if(input=="nombre"){
      Swal.fire(
        "NOMBRE INCORRECTO !",
        "Su nombre debe tener un máximo de 20 caracteres <br> Ejemplo: Ruth Maria",
        "error"
      );
    }else if(input=="apellido"){
      Swal.fire(
        "APELLIDO INCORRECTO!",
        "Su nombre debe tener un máximo de 20 caracteres <br> Ejemplo: Quito Yambay",
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
        "El telefono debe: <br>1.- Tener 10 números <br> Ejemplo: 0934299134",
        "error"
      );
    }else if(input== "telefono"){
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "Ciudades: <br> Riobamba, Guayaquil, Ambato, Quevedo, Ambato, Manta <br>",
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
  //validación de ciudades
  existe = false;
  verificarCiudad(ciudad: string){
    let ciudades = ClienteModule.ciudades;
    for(let i=0; i<ciudades.length; i++){
      if(ciudades[i].toLowerCase() ==ciudad.toLowerCase()){
        this.existe = true;
      }
    }
    if(this.existe){
      alert('Esta ciudad existe')
    }
  }
}
