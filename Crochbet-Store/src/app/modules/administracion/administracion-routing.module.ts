import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from 'src/app/website/components/administracion/administracion.component';
import { ListarClienteComponent } from 'src/app/website/pages/cliente/listar-cliente/listar-cliente.component';
import { ListarProductoComponent } from 'src/app/website/pages/producto/listar-producto/listar-producto.component';
import { ListarProveedorComponent } from 'src/app/website/pages/proveedor/listar-proveedor/listar-proveedor.component';
import { ListarReseniaComponent } from 'src/app/website/pages/resenia/listar-resenia/listar-resenia.component';

const routes: Routes = [
  {path:"",component:AdministracionComponent,children:[
    {path:"",redirectTo:"cliente",pathMatch:"full"},
    {path:"cliente",component:ListarClienteComponent,pathMatch:"full"},
    {path:"proveedor",component:ListarProveedorComponent,pathMatch:"full"},
    {path:"resena",component:ListarReseniaComponent,pathMatch:"full"},
    {path:"producto",component:ListarProductoComponent,pathMatch:"full"},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
