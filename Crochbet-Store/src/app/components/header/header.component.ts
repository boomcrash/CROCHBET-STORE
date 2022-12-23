import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router) { }

  @Input()
  actualUser!: string;

  cerrarSesion(){
    this.router.navigate(['']);
  }

  verPerfil(){
    this.router.navigate(['perfil']);
  }
  verProductos(){
    this.router.navigate(['inicio']);
  }

  verResenas(){
    this.router.navigate(['insertarResenia']);
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
