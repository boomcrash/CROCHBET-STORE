import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorModule } from 'src/app/modules/proveedor/proveedor.module';
import { environment } from 'src/environments/environment.development';
import { EditarProveedorComponent } from '../editar-proveedor/editar-proveedor.component';
import { EliminarProveedorComponent } from '../eliminar-proveedor/eliminar-proveedor.component';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent {
  constructor(public dialog:MatDialog,private route:Router){}

  nombre:string="";
  ruc:string="";
  telefono: string='';
  correo:string="";
  direccion:string="";

  Actualstatus="agregar";

  dataSource:any=[];

  //productObject:ProductoModule=new ProductoModule();

  proveedorObject=ProveedorModule.proveedores;

  displayedColumns: string[] = ['id', 'nombre', 'ruc','telefono', 'correo', 'direccion', 'actions'];



  ngOnInit(): void {
    if(sessionStorage.getItem('rol')!=environment.roles[2]){
      this.route.navigate(["administracion/error"])
    }else{
    this.dataSource=new MatTableDataSource<Proveedor>(this.proveedorObject as Proveedor[]);
    }
  }

  onSubmit(){
    let nuevo={
      id: this.proveedorObject.length+1,
      nombre: this.nombre,
      ruc: this.ruc,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion
    }
    
   }


  estado(estatus:string){
    this.Actualstatus=estatus;
  }

  editarProveedor(idProveedor:string, nombre:string, ruc:string, telefono:string, correo: string, direccion:string){
      this.dialog.open(EditarProveedorComponent, {
        data: {
                'id':idProveedor,
                'nombre':nombre,
                'ruc':ruc,
                'telefono':telefono,
                'correo': correo,
                'direccion':direccion
              }
      });
  }

  eliminarProveedor(idProveedor:string){
    this.dialog.open(EliminarProveedorComponent,{
      data: <number><unknown>idProveedor
    });
    
    this.dialog.afterAllClosed.subscribe(result=>{
      this.proveedorObject=ProveedorModule.proveedores;
      this.dataSource=new MatTableDataSource<Proveedor>(this.proveedorObject as Proveedor[]);
    });
  }



  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  } 
}
