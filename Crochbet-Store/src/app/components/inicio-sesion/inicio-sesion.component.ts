import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit{



  // Variables para determinar cambio de accion en formulario 
  titulo='INICIO DE SESIÓN';
  accion='Iniciar Sesión';
  span='¿No tienes cuenta?';
  alternativa='Registrate !';
  enlace="Olvidé la Contraseña";
  // Cambios de vatiables que alteran la accion del formulario
  cambiarAccion(){
    if(this.accion=='Iniciar Sesión'){
      this.accion='Registrar';
      this.alternativa='Inicia !';
      this.titulo='REGISTRO DE USUARIO';
      this.span='¿Ya tienes cuenta?';
      this.enlace="Ayuda con el registro?";
    }else{
      this.accion='Iniciar Sesión';
      this.alternativa='Registrate !';
      this.titulo='INICIO DE SESIÓN';
      this.span='¿No tienes cuenta?';
      this.enlace="Olvidé la Contraseña";
    }
  }


  // validacion del formulario


  formReactive:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router) { 
    this.formReactive=this.formBuilder.group(
      {
        user:['',[Validators.required,Validators.minLength(4),Validators.pattern(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/i)]],
        password:['',[Validators.required,Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,})/i)]]
      }
    )
  }

  // obtener estado del input (validacion)
  getValue(value:string){
    return this.formReactive.get(value)
  }
  // colores para los input
  inputColorUser='white';
  inputColorPass='white';
  // seteando colores gracias a un keyup listener
  sendAction(input:string){
    if (this.getValue('user')?.invalid && input=="user"){
      this.inputColorUser='pink';
    }else if(this.getValue('user')?.valid && input=="user"){
      this.inputColorUser='lightgreen';
    }if(this.getValue('password')?.invalid && input=="password"){
      this.inputColorPass='pink';
    }else if(this.getValue('password')?.valid && input=="password"){
      this.inputColorPass='lightgreen';
    }

  }

  //ventanas emergentes para visualizar el error de cada input
  abrirVentana(input:string){
    if(input=="user"){
      Swal.fire(
        "USUARIO INCORRECTO !",
        "El usuario debe: <br>1.- No tener espacios.  <br>2.-Ser una sola palabra.  <br>3.-No tener caracteres especiales.  <br>4.-Estar registrado. <br>Ejemplo: boomer",
        "error"
      );
    }else{
      Swal.fire(
        "CONTRASEÑA INCORRECTO !",
        "La contraseña debe: <br>1.- No tener espacios.  <br>2.-Ser una sola palabra.  <br>3.-Al menos un caracter especial.  <br>4.-Al menos un numero. <br>5.-Al menos una mayúscula. <br>Ejemplo :Canasta_2#",
        "error"
      );
    }
    
  }

  ngOnInit(): void {}
  OnChanges() {}
  OnDestroy() {}
  OnAfterViewInit() {}

  usuariosRegistrados:[{user:string,password:string}]=[{'user':'boomer','password':'Canasta_2#'}];
    
  myActualUser: string='';
  myActualPass: string='';
  existe=false;
  duplicado=false;
  existeUsuario=false;
  //inicio de sesion o registro
  ejecutarAccion(){
    if(this.accion=='Iniciar Sesión'){
      this.existe=false;
      this.existeUsuario=false;
        for (const item of this.usuariosRegistrados) {
          if(item.user==this.formReactive.value.user&&item.password==this.formReactive.value.password){
            this.existe=true;
            break;
          }else if(item.user==this.formReactive.value.user&&item.password!=this.formReactive.value.password){
            this.existeUsuario=true;
          }
        }
        if(this.existe){
          Swal.fire(
            "CREDENCIALES CORRECTAS!",
            "Se te redireccionara a la pagina de principal.",
            "success"
          );
          this.router.navigate(["inicio",this.formReactive.value.user]);
          console.log("redireccionando a pagina inicio");
        }else{
          if(this.existeUsuario){
            Swal.fire(
              "CONTRASEÑA INCORRECTA!",
              "La contraseña es incorrecta, por favor intenta de nuevo.",
              "error"
            );
          }else{
            Swal.fire(
              "USUARIO NO REGISTRADO!",
              "El usuario no se encuentra registrado, por favor registrese.",
              "error"
            );
          }
          
        }
        
      
    }else{
      this.duplicado=false;
      for (const item of this.usuariosRegistrados) {
        if(item.user==this.formReactive.value.user){
          this.duplicado=true;
          break;
        }
      }
      if(this.duplicado){
        Swal.fire(
          "Usuario Duplicado!",
          "Este usuario ya existe.<br>Prueba con otro nombre de usuario.",
          "error"
        );

      }else{
          this.myActualPass=this.formReactive.value.password;
        this.myActualUser=this.formReactive.value.user;
        this.usuariosRegistrados.push({user:this.myActualUser,password:this.myActualPass});
        Swal.fire(
          "USUARIO REGISTRADO  EXISTOSAMENTE!",
          "Inicia sesion con tu nueva cuenta.",
          "success"
        );
        
      }


      
    }
  }

}


