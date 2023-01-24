import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { FooterComponent } from 'src/app/website/components/footer/footer.component';
import { HeaderComponent } from 'src/app/website/components/header/header.component';
import { BusquedaComponent } from 'src/app/website/components/busqueda/busqueda.component';
import { CambiarContrasenaComponent } from 'src/app/website/components/cambiar-contrasena/cambiar-contrasena.component';
import { CarritoComponent } from 'src/app/website/components/carrito/carrito.component';
import { ChatComponent } from 'src/app/website/components/chat/chat.component';
import { InicioComponent } from 'src/app/website/components/inicio/inicio.component';
import { PerfilComponent } from 'src/app/website/components/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginaInicioComponent } from 'src/app/website/components/pagina-inicio/pagina-inicio.component';

import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [  
    PaginaInicioComponent,
    PerfilComponent,
    BusquedaComponent,
    ChatComponent,
    CambiarContrasenaComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxPayPalModule,
    FormsModule, 
    ReactiveFormsModule ,
    MatDialogModule,
    MatTableModule,
    NgbModule,
    QuicklinkModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InicioModule { }
