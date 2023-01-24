import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './website/components/inicio-sesion/inicio-sesion.component';
import { LayoutComponent } from './website/components/layout/layout.component';
import { NotFoundErrorComponent } from './website/components/not-found-error/not-found-error.component';
 
const routes: Routes = [
  {
    path: '',loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule)
  },
  
  {path:"**",component:NotFoundErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
