import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Reseña } from 'src/app/interfaces/reseña';
import { ReseñaModule } from 'src/app/modules/reseña/reseña.module';
import { EditarReseniaComponent } from '../editar-resenia/editar-resenia.component';
import { EliminarReseniaComponent } from '../eliminar-resenia/eliminar-resenia.component';

@Component({
  selector: 'app-listar-resenia',
  templateUrl: './listar-resenia.component.html',
  styleUrls: ['./listar-resenia.component.css']
})
export class ListarReseniaComponent {
  constructor(public dialog:MatDialog){}
  displayedColumns: string[] = ['id','nombre','apellido','email','mensaje','actions'];
  dataSource:any=[];

  reseñasObject=ReseñaModule.reseñas;
  ngOnInit(): void {
    this.dataSource=new MatTableDataSource<Reseña>(this.reseñasObject as Reseña[]);
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
eliminarResenia(idReseña:number){
  this.dialog.open(EliminarReseniaComponent,{
    data: <number><unknown>idReseña
  });
  
  this.dialog.afterAllClosed.subscribe(result=>{
    this.reseñasObject=ReseñaModule.reseñas;
    this.dataSource=new MatTableDataSource<Reseña>(this.reseñasObject as Reseña[]);
  });
}
}
