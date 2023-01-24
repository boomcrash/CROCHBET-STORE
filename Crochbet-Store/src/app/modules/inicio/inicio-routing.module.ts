import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdministracionComponent } from 'src/app/website/components/administracion/administracion.component';
import { BusquedaComponent } from 'src/app/website/components/busqueda/busqueda.component';
import { InicioComponent } from 'src/app/website/components/inicio/inicio.component';
import { PaginaInicioComponent } from 'src/app/website/components/pagina-inicio/pagina-inicio.component';
import { PerfilComponent } from 'src/app/website/components/perfil/perfil.component';
import { InsertarReseniaComponent } from 'src/app/website/pages/resenia/insertar-resenia/insertar-resenia.component';

const routes: Routes = [

  {path:"",canActivate:[AuthGuard],component:InicioComponent,children:[
    {path:"",redirectTo:"productos",pathMatch:"full"},
    {path:"productos",canActivate:[AuthGuard],component:PaginaInicioComponent,pathMatch:"full"},
    {path:"busqueda/:filtro/:tipo",canActivate:[AuthGuard],component:BusquedaComponent},
    {path:"perfil",canActivate:[AuthGuard],component:PerfilComponent,pathMatch:"full"},
    {path:"insertarResenia",canActivate:[AuthGuard],component:InsertarReseniaComponent},
    {path:"resena",canActivate:[AuthGuard],component:InsertarReseniaComponent},  ]
  }, 
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
