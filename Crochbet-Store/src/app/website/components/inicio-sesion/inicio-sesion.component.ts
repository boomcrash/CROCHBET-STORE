import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioModule } from 'src/app/modules/usuario/usuario.module';
import { BotService } from 'src/app/services/bot/bot.service';
import { ProductsService } from 'src/app/services/product/products.service';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';
//importar usuarioRest interfaz
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
  enlace="Entrar Como Invitado";
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
      this.enlace="Entrar Como Invitado";
    }
  }


  // validacion del formulario


  formReactive:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,public http:HttpClient) { 
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

  ngOnInit(): void {
      /*let usuarios=new UsuariosService(this.http);
      console.log("USUARIOS");
      usuarios.getUsarios().subscribe((data:any)=>{
        console.log(data);
      });*/
      
      let productos=new ProductsService(this.http);

      productos.getProducts().subscribe((data:any)=>{
        console.log(data);
      });

      let respuesta=new BotService(this.http);
      respuesta.getResponse('hola como estas').subscribe((data:any)=>{
        console.log(data);
      });
    }
  OnChanges() {}
  OnDestroy() {}
  OnAfterViewInit() {}

  usuariosRegistrados:Usuario[]=UsuarioModule.usuarios;
    
  myActualUser: string='';
  myActualPass: string='';
  existe=false;
  duplicado=false;
  existeUsuario=false;
  //inicio de sesion o registro
  ejecutarAccion(tipo:string){
    if(tipo=='INVITADO'){
      Swal.fire(
        "ENTRASTE COMO INVITADO!",
        "Bienvenido a la tienda de CrochBet",
        "success"
      );

      sessionStorage.setItem('usuario','INVITADO');
      sessionStorage.setItem('rol','1');
      this.router.navigate(["inicio"]);
    }else{
      if(this.accion=='Iniciar Sesión'){

        let usuarios=new UsuariosService(this.http);
        let existeUser=false;
        console.log("VERIFICAR USUARIO");
        usuarios.verificarUsuarioContrasena(this.formReactive.value.user,this.formReactive.value.password).subscribe((data:any)=>{
          console.log(data);
          console.log("rol",data[0]['rolId']);
          let rolId=data[0]['rolId'];
          let userId=data[0]['idUsuario'];
          if(data!=false&&data!=null&&data!=undefined&&data.length>0){
            existeUser=true; 
          }

          if(existeUser){
            Swal.fire(
              "CREDENCIALES CORRECTAS!",
              "Se te redireccionara a la pagina de principal.",
              "success"
            );
            
            sessionStorage.setItem('usuario',data[0]['usuario']);
            sessionStorage.setItem('rol',rolId.toString());
            sessionStorage.setItem('idUsuario',userId.toString());
            this.router.navigate(["inicio"]);
            console.log("redireccionando a pagina inicio");
          }else{
            if(this.existeUsuario==false){
              Swal.fire(
                "CREDENCIALES INCORRECTAS!",
                "El usuario o la contraseña son incorrectos.",
                "error"
              );
            }
            
          }

        });
        


      }else{
        this.duplicado=false;
        let usuariosBd=new UsuariosService(this.http);
        
        usuariosBd.getUsuarios().subscribe((data:any)=>{
          console.log(data);

          for (const item of data) {
            if(item.usuario==this.formReactive.value.user){
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
            
            let usuariosInsert=new UsuariosService(this.http);
            usuariosInsert.insertarUsuario(this.myActualUser,this.myActualPass,2).subscribe((data:any)=>{
              console.log(data);
              if(data==true){
                Swal.fire(
                  "USUARIO REGISTRADO  EXISTOSAMENTE!",
                  "Inicia sesion con tu nueva cuenta.",
                  "success"
                );
                this.usuariosRegistrados.push({user:this.myActualUser,password:this.myActualPass,direccion:'',nombre:'',nacimiento:'',postal:'',rol:1});
              }else{
                Swal.fire(
                  "ERROR AL REGISTRAR USUARIO!",
                  "No se pudo registrar el usuario.",
                  "error"
                );
              }
              
            });

            
            
          }
        }

        
        );
      }
    }
    }
    

}


