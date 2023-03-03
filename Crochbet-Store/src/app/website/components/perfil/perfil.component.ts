import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioModule } from 'src/app/modules/usuario/usuario.module';
import { ClientesService } from 'src/app/services/cliente/clientes.service';
import { UsuariosService } from 'src/app/services/usuario/usuarios.service';
import Swal from 'sweetalert2';
import { CambiarContrasenaComponent } from '../cambiar-contrasena/cambiar-contrasena.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  formReactive:FormGroup;
  
  constructor(public http:HttpClient,private formBuilder:FormBuilder,private router:Router,
    private route:ActivatedRoute,
    //private productsService:ProductsService,
    public dialog:MatDialog) { 
      this.formReactive=this.formBuilder.group(
        {
          nombre:['',[Validators.required]],//Validators.pattern("[A-Za-z]")
          apellido:['',[Validators.required]],
          direccion:['',[Validators.required]],
          telefono:['',[Validators.required]],
          ciudad:['',[Validators.required]],
          correo:['',[Validators.required]]     
    
        }
      )

    }


  usuario:string | null= '';

  nombre:string= '';
  apellido:string= '';
  direccion:string= '';
  telefono:string= '';
  ciudad:string= '';
  correo:string= '';

  usuarios:Usuario[]=UsuarioModule.usuarios;
  ngOnInit() {
    let userId=Number(sessionStorage.getItem('idUsuario'));
    //consumir servicio de cliente
    let cliente=new ClientesService(this.http);
    cliente.GetClienteByUserId(userId).subscribe(
      (data)=>{
        if (data!=false){
          this.nombre=data[0]['nombre'];
          this.apellido=data[0]['apellido'];
          this.direccion=data[0]['direccion'];
          this.ciudad=data[0]['ciudad'];
          this.telefono=data[0]['telefono'];
          this.correo=data[0]['correo'];
          this.usuario=sessionStorage.getItem('usuario');
          console.log(data);
        }else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Su Cuenta Aun no dispone de datos como cliente',
            showConfirmButton: false,
            timer: 1500
          });

        }
        
      },
      (error)=>{
        console.log(error);
      }
    );
    this.usuario=sessionStorage.getItem('idUsuario');
    
  }


  guardarCambios(){
    let userId=Number(sessionStorage.getItem('idUsuario'));
    //consumir servicio de cliente
    let cliente=new ClientesService(this.http);
    try{
      cliente.GetClienteByUserId(userId).subscribe(
      (data)=>{
        if (data==false){
          cliente.AddCliente(this.nombre,this.apellido,this.ciudad,this.direccion,this.telefono,this.correo,userId).subscribe(
            (data)=>{
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se ha agregado como cliente Nuevo',
                showConfirmButton: false,
                timer: 1500
              });
              console.log(data);
            }
          );
        }else{
          let idCliente=data[0]['idCliente'];
          console.log("editando cliente")
          cliente.SetCliente(idCliente,this.nombre,this.apellido,this.ciudad,this.direccion,this.telefono,this.correo).subscribe(
            (data)=>{
              if(data==true){
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Cambios guardados',
                  showConfirmButton: false,
                  timer: 1500
                });
              }else{
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'No se han guardado los cambios',
                  showConfirmButton: false,
                  timer: 1500
                });
              }
              
              console.log(data);
            },
            (error)=>{
              console.log(error);
            }
          );
        }
      }
    );
    }catch(error){
      console.log(error);
    }


    /*for(let i=0;i<this.usuarios.length;i++){
      if(this.usuario!=null){

      if(this.usuarios[i].user.toLowerCase()==this.usuario.toLowerCase()){

        this.usuarios[i].nombre=this.nombre;
        this.usuarios[i].direccion=this.direccion;
        this.usuarios[i].postal=this.postal;
        this.usuarios[i].nacimiento=this.nacimiento;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cambios guardados',
          showConfirmButton: false,
          timer: 1500
        });
        }
      } 
    }*/
  }

  async cambiarContrasena(){
    //abrir modal para cambiar contraseña (componente cambiarContrasena)
    let contrasena:string='';
    let user=new UsuariosService(this.http);
    let getUserId=await user.getUsuarioId().subscribe(
      (data:any)=>{
        console.log(data)
        contrasena=data[0]['contrasena'];
        //console.log("contrasena: ",contrasena);
        this.dialog.open(CambiarContrasenaComponent,{data:contrasena});
      }
    );
    
  }
  

}
