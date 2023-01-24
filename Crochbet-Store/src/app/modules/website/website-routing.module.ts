import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from 'src/app/website/components/inicio-sesion/inicio-sesion.component';
import { LayoutComponent } from 'src/app/website/components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: "login", component: InicioSesionComponent },
    ]
  },
  { path: "inicio", loadChildren: () => import('src/app/modules/inicio/inicio.module').then(m => m.InicioModule) },
  { path: "administracion", loadChildren: () => import('src/app/modules/administracion/administracion.module').then(m => m.AdministracionModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
