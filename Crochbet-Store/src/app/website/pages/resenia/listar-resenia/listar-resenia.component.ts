import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Reseña } from 'src/app/interfaces/reseña';
import { ReseñaModule } from 'src/app/modules/reseña/reseña.module';
import { ResenasService } from 'src/app/services/resena/resenas.service';
import { environment } from 'src/environments/environment.development';
import { EditarReseniaComponent } from '../editar-resenia/editar-resenia.component';
import { EliminarReseniaComponent } from '../eliminar-resenia/eliminar-resenia.component';
@Component({
  selector: 'app-listar-resenia',
  templateUrl: './listar-resenia.component.html',
  styleUrls: ['./listar-resenia.component.css']
})
export class ListarReseniaComponent {
  constructor(public dialog:MatDialog,private route:Router,public http:HttpClient){}
  displayedColumns: string[] = ['idResena','nombre','apellido','email','mensaje','actions'];
  nombre:string="";
  apellido:string="";
  email:string="";
  mensaje:string="";
  dataSource:any=[];

  reseñasObject:Reseña[]=[];

  async cargarReseñas(){
    let reseñas=new ResenasService(this.http);
    let result=await reseñas.getResenas().subscribe((data:any)=>{
      this.reseñasObject=data;
      console.log(this.reseñasObject);
      if(sessionStorage.getItem('rol')!=environment.roles[2]){
        this.route.navigate(["administracion/error"])
      }else{
      this.dataSource=new MatTableDataSource<Reseña>(this.reseñasObject as Reseña[]);
      }
    });
  }



  ngOnInit(): void {
    this.cargarReseñas();
  }

editarResenia(idReseña:number, nombre:string, apellido:string, email:string, mensaje:string){
  this.dialog.open(EditarReseniaComponent, {
    data: {
            'id':idReseña,
            'nombre':nombre,
            'apellido':apellido,
            'email':email,
            'mensaje':mensaje,
          }
  });
}
eliminarResena(idReseña:number){
  this.dialog.open(EliminarReseniaComponent,{
    data: <number>idReseña
  });

  this.dialog.afterAllClosed.subscribe((data: any)=>{
  this.reseñasObject=data;
  this.cargarReseñas();
  this.dataSource=new MatTableDataSource<Reseña>(this.reseñasObject as Reseña[]);
  });

}

filtrar(event: Event) {
  const filtro = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filtro.trim().toLowerCase();
}
}
