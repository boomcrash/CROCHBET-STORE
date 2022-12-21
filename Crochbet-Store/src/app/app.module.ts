import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InsertarProductoComponent } from './pages/producto/insertar-producto/insertar-producto.component';
import { ListarProductoComponent } from './pages/producto/listar-producto/listar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    PaginaInicioComponent,
    InsertarProductoComponent,
    ListarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
