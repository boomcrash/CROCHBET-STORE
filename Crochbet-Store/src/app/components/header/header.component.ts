import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router,
    private route:ActivatedRoute) { }

  filtro: string = '';

  buscar(){

    this.router.navigate(['busqueda',this.user,this.filtro]);
    console.log(this.filtro);
    
  }

  buscarTodos(){
    this.router.navigate(['busqueda',this.user,'todos']);
    console.log('todos');
  }

  @Input()
  actualUser!: string;

  user: string = '';

  ngOnInit(): void {
    
    let usuario=this.route.snapshot.params['usuario'];
    console.log('usuario: '+usuario);
    
    if(this.actualUser == null && usuario != null){
      this.user = usuario;
    }
    else{
      this.user= this.actualUser;
    }
    
  }

  cerrarSesion(){
    this.router.navigate(['']);
  }

  verPerfil(){
    this.router.navigate(['perfil',this.user]);
  }

  verProductos(){
    this.router.navigate(['inicio',this.user]);
  }

  verResenas(){
    this.router.navigate(['insertarResenia',this.user]);
  }

  verAdministracion(){
    // opcion deshabilitada por el momento
    Swal.fire({
      title: 'Opcion deshabilitada',
      text: 'Esta opcion se habilitara en un futuro',
      icon: 'warning',
      confirmButtonText: 'OK'
    })
  }
}
