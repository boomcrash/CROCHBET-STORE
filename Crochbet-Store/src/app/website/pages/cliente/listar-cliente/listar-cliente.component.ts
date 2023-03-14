import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import { environment } from 'src/environments/environment.development';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from '../eliminar-cliente/eliminar-cliente.component';
import { HttpClient } from '@angular/common/http';
import { ClientesService } from 'src/app/services/cliente/clientes.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent {
  constructor(public dialog:MatDialog,private route:Router,public http:HttpClient){}
  
/*   nombre:string"";
  apellido:string"";
  ciudad:string"";
  direccion:string"";
  telefono:string"";
  correo:string"";
  usuarioId:number=0; */
  
  Actualstatus="agregar";

  dataSource:any=[];

  clienteObject:Cliente[]=[];

  displayedColumns: string[] = ['id', 'nombre', 'apellido','ciudad', 'direccion', 'telefono', 'correo','usuarioId', 'actions'];

  async cargarClientes(){
    let clientes=new ClientesService(this.http);
    let result=await clientes.listarCliente().subscribe((data:any)=>{
      this.clienteObject=data;
      console.log(this.clienteObject);
      if(sessionStorage.getItem('rol')!=environment.roles[2]){
        this.route.navigate(["administracion/error"])
      }else{
      this.dataSource=new MatTableDataSource<Cliente>(this.clienteObject as Cliente[]);
      }
    });
  }

  usuario:string | null="";
  rol:string | null="";

  ngOnInit(): void {
    /* this.usuario=sessionStorage.getItem('usuario');
    this.rol=sessionStorage.getItem('rol');
    if(this.rol==null){
      this.route.navigate(['']);
    }
    else if(sessionStorage.getItem('rol')!=environment.roles[2]){
      this.route.navigate(["administracion/error"])
    }else{
      this.dataSource=new MatTableDataSource<Cliente>(this.clientesObject as Cliente[]);
    } */
    this.cargarClientes();


  }

  editarCliente(idCliente:string, nombre:string, apellido:number, ciudad:string, direccion:string, telefono:string, correo:string){
    this.dialog.open(EditarClienteComponent, {
      data: {
              'id':idCliente,
              'nombre':nombre,
              'apellido':apellido,
              'ciudad':ciudad,
              'direccion': direccion,
              'telefono': telefono,
              'correo': correo
            }
    });
}

eliminarCliente(idCliente:string){
  /* this.dialog.open(EliminarClienteComponent,{
    data: <number><unknown>idCliente
  });

  this.dialog.afterAllClosed.subscribe(result=>{
    this.clientesObject=ClienteModule.clientes;
    this.dataSource=new MatTableDataSource<Cliente>(this.clientesObject as Cliente[]);
  }); */
}


estado(estatus:string){
  this.Actualstatus=estatus;
}


filtrar(event: Event) {
  const filtro = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filtro.trim().toLowerCase();
} 

}
