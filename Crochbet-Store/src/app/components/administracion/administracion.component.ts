import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';
import { ProductoModule } from 'src/app/modules/producto/producto.module';


@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit{

  constructor() { }

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

  editarProducto(id:number){

  }

  eliminarProducto(id:number){

  }

  estado(estatus:string){
    this.Actualstatus=estatus;
  }
  valorCambio(value: string){
    console.log("nuevo valor:" + value)
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
}
