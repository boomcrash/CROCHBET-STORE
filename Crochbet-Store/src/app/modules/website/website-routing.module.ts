import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmGuard } from 'src/app/guards/adm.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';
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
  { path: "inicio",canActivate:[AuthGuard], loadChildren: () => import('src/app/modules/inicio/inicio.module').then(m => m.InicioModule) },
  { path: "administracion",canActivate:[AdmGuard], loadChildren: () => import('src/app/modules/administracion/administracion.module').then(m => m.AdministracionModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
