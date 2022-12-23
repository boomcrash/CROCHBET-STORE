import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InsertarReseniaComponent } from './pages/resenia/insertar-resenia/insertar-resenia.component';
 
const routes: Routes = [
  {path:"",component:InicioSesionComponent},
  {path:"inicio/:usuario",component:PaginaInicioComponent,pathMatch:'full'},
  {path:"inicio",component:PaginaInicioComponent,pathMatch:'full'},
  {path:"perfil",component:PerfilComponent,pathMatch:'full'},
  {path:"insertarResenia",component:InsertarReseniaComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
