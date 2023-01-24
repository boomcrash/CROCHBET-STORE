import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from 'src/app/components/administracion/administracion.component';
import { BusquedaComponent } from 'src/app/components/busqueda/busqueda.component';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { PaginaInicioComponent } from 'src/app/components/pagina-inicio/pagina-inicio.component';
import { PerfilComponent } from 'src/app/components/perfil/perfil.component';
import { InsertarReseniaComponent } from 'src/app/pages/resenia/insertar-resenia/insertar-resenia.component';

const routes: Routes = [

  {path:"",component:InicioComponent,children:[
    {path:"",redirectTo:"inicio"},
    {path:"inicio",component:PaginaInicioComponent},
    {path:"busqueda/:filtro/:tipo",component:BusquedaComponent},
    {path:"busqueda/:filtro/:tipo",component:BusquedaComponent},
    {path:"perfil",component:PerfilComponent},
    {path:"insertarResenia",component:InsertarReseniaComponent},
    {path:"administracion",component:AdministracionComponent},
    {path:"administracion/:modulo",component:AdministracionComponent},
    {path:"resena",component:InsertarReseniaComponent},
  ]
  }, 
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
