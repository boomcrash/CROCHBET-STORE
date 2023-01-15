import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent {
  

  formReactive:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,public http:HttpClient) {
    this.formReactive=this.formBuilder.group(
      {
        titulo:['',[Validators.required,, Validators.minLength(3), Validators.maxLength(20)]],//Validators.pattern("[A-Za-z]")
        precio:['',[Validators.required,Validators.minLength(1), Validators.pattern(/^[0-9]{1,4}$/i)]],
        imagen:['',[Validators.required]],
        descripcion:['',[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
        categoria:['',[Validators.required,Validators.minLength(4)]]      }
    )
  }
  
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
