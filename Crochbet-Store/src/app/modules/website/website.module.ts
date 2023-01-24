import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from 'src/app/modules/website/website-routing.module';

import { InicioSesionComponent } from 'src/app/website/components/inicio-sesion/inicio-sesion.component';

import { HeaderComponent } from 'src/app/website/components/header/header.component';
import { FooterComponent } from 'src/app/website/components/footer/footer.component';

import { ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from 'src/app/website/components/inicio/inicio.component';
import { AdministracionComponent } from 'src/app/website/components/administracion/administracion.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InicioSesionComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    AdministracionComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    HttpClientModule,
    FormsModule,    //added here too
    ReactiveFormsModule ,
    MatDialogModule,
    MatTableModule,
    NgbModule
  ]
})
export class WebsiteModule { }
