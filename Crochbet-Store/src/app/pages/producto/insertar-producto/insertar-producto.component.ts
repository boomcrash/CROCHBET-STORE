import { Component } from '@angular/core';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent {
  
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
    Swal.fire({
      title: 'INSERTADO EXITOSAMENTE',
      text: 'Usted ha insertado el producto ',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    this.titulo="";
    this.precio=0;
    this.miImagen='';
    this.descripcion="";
    this.categoria="";
   }
}
