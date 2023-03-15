import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import Swal from 'sweetalert2';
import { ClientesService } from 'src/app/services/cliente/clientes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

  nombre: string = "";
  apellido: string = "";
  ciudad: string = "";
  direccion: string = "";
  telefono: string = '';
  correo: string = "";
  usuarioId: number = 0;

  id = 0;
  formReactive: any;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente, private http: HttpClient) {
      if(data.idCliente!=undefined &&
        data.nombre!=undefined &&
        data.apellido!=undefined &&
        data.ciudad!=undefined &&
        data.direccion!=undefined &&
        data.telefono!=undefined &&
        data.correo!=undefined &&
        data.usuarioId!=undefined
        ){
    this.id = data.idCliente;
    console.log(this.id);
    this.nombre = data.nombre;
    this.apellido = data.apellido;
    this.ciudad = data.ciudad;
    this.direccion = data.direccion;
    this.telefono = data.telefono;
    this.correo = data.correo;
    this.usuarioId = data.usuarioId;
    }

    this.formReactive = this.formBuilder.group(
      {
        nombre: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i)]],//Validators.pattern("[A-Za-z]")
        apellido: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i)]],
        ciudad: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
        direccion: ['', [Validators.required, Validators.maxLength(20)]],
        telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]{10}$/i)]],
        correo: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
        usuarioId: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/^[1-9]{1}[0-9]{0,4}$/i)]]

      }
    )


  }



  clientesObject = ClienteModule.clientes;

  ngOnInit(): void {

  }

  modificarCliente() {

    let service = new ClientesService(this.http);
    service.getUsuarioIdParameter(this.usuarioId).subscribe((data: any) => {
      console.log(data);
      if (data.length > 0) {
        let servicioPut = new ClientesService(this.http)
        let miCliente: Cliente = {
          idCliente: this.id,
          nombre: this.nombre,
          apellido: this.apellido,
          ciudad: this.ciudad,
          direccion: this.direccion,
          telefono: this.telefono,
          correo: this.correo,
          usuarioId: this.usuarioId
        }
        console.log(miCliente)
        servicioPut.putCliente(miCliente).subscribe((data: any) => {
          console.log("Editado",data);
          Swal.fire({
            title: 'EDITADO EXITOSAMENTE',
            text: 'Usted ha editado el usuario con id : ' + this.usuarioId,
            icon: 'warning', confirmButtonText: 'OK'
          });
          this.dialogRef.close();
          window.location.reload();
        });
          
        } else {
          Swal.fire({
            title: 'ERROR',
            text: 'El usuario con id : ' + this.usuarioId + ' no existe',
            icon: 'warning', confirmButtonText: 'OK'
          });
          this.dialogRef.close();
        }
    });
  }



  salir() {
    this.dialogRef.close();
  }

  getValue(value: string) {
    return this.formReactive.get(value)
  }

  abrirVentana(input: string) {
    if (input == "nombre") {
      Swal.fire(
        "NOMBRE INCORRECTO !",
        "El nombre no debe tener un mas de 20 caracteres, y no incluye números <br> Ejemplo: Ruth Maria",
        "error"
      );
    } else if (input == "apellido") {
      Swal.fire(
        "APELLIDO INCORRECTO!",
        "Su nombre debe tener un máximo de 20 caracteres <br> Ejemplo: Quito Yambay",
        "error"
      );
    } else if (input == "direccion") {
      Swal.fire(
        "DIRECCIÓN INCORRECTO !",
        "Debe ingresar su dirección<br> Ejemplo: Coop. Juan Pablo II",
        "error"
      );
    } else if (input == "ciudad") {
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "Debe llenar este campo, con ciudades ecuatorianas<br>",
        "error"
      );

    } else if (input == "telefono") {
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "El telefono debe: <br>1.- Tener 10 números <br> Ejemplo: 0934299134",
        "error"
      );
    } else if (input == "correo") {
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "Ingrese correctamente su correo: <br>Ejemplo: ruth11@gmail.com",
        "error"
      );
    }

  }
}
