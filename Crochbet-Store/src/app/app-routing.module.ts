import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InsertarReseniaComponent } from './pages/resenia/insertar-resenia/insertar-resenia.component';
 
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"login",component:InicioSesionComponent,pathMatch:'full'},
  {path:"inicio",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  {path:"**",component:NotFoundErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
