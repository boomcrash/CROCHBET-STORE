import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { EditarClienteComponent } from 'src/app/website/pages/cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from 'src/app/website/pages/cliente/eliminar-cliente/eliminar-cliente.component';
import { InsertarClienteComponent } from 'src/app/website/pages/cliente/insertar-cliente/insertar-cliente.component';
import { ListarClienteComponent } from 'src/app/website/pages/cliente/listar-cliente/listar-cliente.component';
import { EditarProductoComponent } from 'src/app/website/pages/producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from 'src/app/website/pages/producto/eliminar-producto/eliminar-producto.component';
import { InsertarProductoComponent } from 'src/app/website/pages/producto/insertar-producto/insertar-producto.component';
import { ListarProductoComponent } from 'src/app/website/pages/producto/listar-producto/listar-producto.component';
import { EditarProveedorComponent } from 'src/app/website/pages/proveedor/editar-proveedor/editar-proveedor.component';
import { EliminarProveedorComponent } from 'src/app/website/pages/proveedor/eliminar-proveedor/eliminar-proveedor.component';
import { InsertarProveedorComponent } from 'src/app/website/pages/proveedor/insertar-proveedor/insertar-proveedor.component';
import { ListarProveedorComponent } from 'src/app/website/pages/proveedor/listar-proveedor/listar-proveedor.component';
import { EditarReseniaComponent } from 'src/app/website/pages/resenia/editar-resenia/editar-resenia.component';
import { EliminarReseniaComponent } from 'src/app/website/pages/resenia/eliminar-resenia/eliminar-resenia.component';
import { InsertarReseniaComponent } from 'src/app/website/pages/resenia/insertar-resenia/insertar-resenia.component';
import { ListarReseniaComponent } from 'src/app/website/pages/resenia/listar-resenia/listar-resenia.component';


import { ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { AdministracionComponent } from 'src/app/website/components/administracion/administracion.component';

import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    ListarProductoComponent,
    ListarClienteComponent,
    ListarProveedorComponent,
    ListarReseniaComponent,
    
    InsertarClienteComponent,
    InsertarReseniaComponent,
    InsertarProveedorComponent,
    InsertarProductoComponent,

    EliminarClienteComponent,
    EliminarProveedorComponent,
    EliminarReseniaComponent,
    EliminarProductoComponent,

    EditarProductoComponent,
    EditarProveedorComponent,
    EditarClienteComponent,
    EditarReseniaComponent,
    
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule ,
    MatDialogModule,
    MatTableModule,
    NgbModule,
    QuicklinkModule
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdministracionModule { }
