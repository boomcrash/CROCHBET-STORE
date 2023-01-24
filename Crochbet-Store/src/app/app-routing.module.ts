import { NgModule } from '@angular/core';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { InicioSesionComponent } from './website/components/inicio-sesion/inicio-sesion.component';
import { LayoutComponent } from './website/components/layout/layout.component';
import { NotFoundErrorComponent } from './website/components/not-found-error/not-found-error.component';
import {QuicklinkStrategy} from 'ngx-quicklink';
const routes: Routes = [
  {
    path: '',loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule)
  },
  
  {path:"**",component:NotFoundErrorComponent}
  
];

@NgModule({
  //usar preloadAllModules para cargar todos los modulos de forma pre-cargada (cuando no tnegamos muchos modulos)

   //usar ,{preloadingStrategy:QuicklinkStrategy} para cargar los modulos de forma pre-cargada (cuando tengamos muchos modulos)
   //esto se usa para cargar en base a la navegacion del cliente!
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:QuicklinkStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
