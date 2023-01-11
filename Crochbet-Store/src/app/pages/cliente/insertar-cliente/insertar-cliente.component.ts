import { Component } from '@angular/core';
import { ProductoModule } from 'src/app/modules/producto/producto.module';

@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent {
  
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
      
     }
}
