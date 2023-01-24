import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoModule } from 'src/app/modules/carrito/carrito.module';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router,
    private route:ActivatedRoute) { }

  rol:string|null='';
  roles:string[] = [];
  filtro: string = '';

  buscar(){

    this.router.navigate(['busqueda',this.filtro,'titulo']);
    console.log(this.filtro);

  }

  buscarTodos(){
    this.router.navigate(['busqueda','todos','titulo']);
    console.log('todos');
  }



  user: string | null= '';

  accion='Cerrar Sesion'


  ngOnInit(): void {
    this.roles=environment.roles;

    let usuario=sessionStorage.getItem('usuario');
    
    console.log('usuario: '+usuario);
    
    if(usuario != null){
      this.user = usuario;
    }
    
    this.rol=sessionStorage.getItem('rol') ;
    console.log('rol: '+this.rol);
    if(this.rol==this.roles[0]){
      this.accion='Salir';
    }
  }


  cerrarSesion(){
    try{
      CarritoModule.eliminarTodoDelCarrito();
      sessionStorage.removeItem('usuario');
      sessionStorage.removeItem('rol');
    }catch(error){
      console.log(error);
    }
    this.router.navigate(['']);
  }

  verPerfil(){
    if(this.rol!=environment.roles[0]){
      this.router.navigate(['perfil']);
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Debe iniciar sesion para acceder a su perfil',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }

  verProductos(){
    this.router.navigate(['inicio']);
  }

  verResenas(){
    this.router.navigate(['insertarResenia']);
  }

  verAdministracion(){
    // opcion deshabilitada por el momento
   /* Swal.fire({
      title: 'Opcion deshabilitada',
      text: 'Esta opcion se habilitara en un futuro',
      icon: 'warning',
      confirmButtonText: 'OK'
    })*/
    this.router.navigate(['administracion','administracion']);
  }
}
