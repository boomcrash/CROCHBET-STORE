import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InsertarReseniaComponent } from './pages/resenia/insertar-resenia/insertar-resenia.component';
 
const routes: Routes = [
  {path:"",component:InicioSesionComponent},
  {path:"inicio/:usuario",component:PaginaInicioComponent,pathMatch:'full'},
  {path:"busqueda/:usuario/:filtro",component:BusquedaComponent,pathMatch:'full'},
  {path:"perfil/:usuario",component:PerfilComponent,pathMatch:'full'},
  {path:"insertarResenia/:usuario",component:InsertarReseniaComponent,pathMatch:'full'},
  {path:"administracion/:usuario",component:AdministracionComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
