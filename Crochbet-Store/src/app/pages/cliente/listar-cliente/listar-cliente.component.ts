import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from '../eliminar-cliente/eliminar-cliente.component';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent {
  constructor(public dialog:MatDialog){}

  titulo:string="";
  precio:number=0;
  miImagen: string='';
  descripcion:string="";
  categoria:string="";

  Actualstatus="agregar";

  dataSource:any=[];

  //productObject:ProductoModule=new ProductoModule();

  productObject=ProductoModule.productos;

  displayedColumns: string[] = ['id', 'title', 'price','image', 'description', 'category', 'actions'];



  ngOnInit(): void {
    this.dataSource=new MatTableDataSource<Product>(this.productObject as Product[]);
  }

  onSubmit(){
    let nuevo={
      id: this.productObject.length+1,
      title: this.titulo,
      price: this.precio,
      image: this.miImagen,
      description: this.descripcion,
      category: this.categoria
    }
    ProductoModule.productos.push(nuevo);
    let existe=false;
    for(let i=0; i<ProductoModule.categorias.length; i++){
      if (ProductoModule.categorias[i]==this.categoria.toUpperCase()){
        existe=true;
      }
    }
    if(existe==false){
      ProductoModule.categorias.push(this.categoria.toUpperCase());
    }
    
   }


  estado(estatus:string){
    this.Actualstatus=estatus;
  }

  editarProducto(idCliente:string, titulo:string, precio:number, imagen:string, descripcion:string, categoria:string){
      this.dialog.open(EditarClienteComponent, {
        data: {
                'id':<number><unknown>idCliente,
                'titulo':titulo,
                'precio':precio,
                'imagen':imagen,
                'descripcion':descripcion,
                'categoria':categoria
              }
      });
  }

  eliminarProducto(idCliente:string){
    this.dialog.open(EliminarClienteComponent,{
      data: <number><unknown>idCliente
    });
    
    this.dialog.afterAllClosed.subscribe(result=>{
      this.productObject=ProductoModule.productos;
      this.dataSource=new MatTableDataSource<Product>(this.productObject as Product[]);
    });
  }

}
