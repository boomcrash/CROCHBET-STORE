import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { window } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { CarritoModule } from 'src/app/modules/carrito/carrito.module';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import { ProductsService } from 'src/app/services/product/products.service';
import Swal from 'sweetalert2';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  constructor(private router:Router,
    private route:ActivatedRoute,
    public dialog:MatDialog,public http:HttpClient){

    }
  
    moduloProducto:Product[]=[];

    async cargarProductos(){
      let products=new ProductsService(this.http);
      let result=await products.getProducts().subscribe((data:any)=>{
        this.moduloProducto=data;
        console.log(this.moduloProducto);
      });
    }


    ngOnInit(): void {
      this.cargarProductos();
    }

    ngOnChanges(): void {

    }

    filtrarProductos(){
      let arrayProductos:Product[]=[];
      let filtrado=this.route.snapshot.params['filtro'];
      let tipo=this.route.snapshot.params['tipo'];

     

      console.log(filtrado)

      var regex = new RegExp(filtrado,'gi');
      console.log(regex);

      if(filtrado=='todos'){
        return this.moduloProducto;
      }else{
        if (tipo=='categoria'){
          console.log(this.moduloProducto)
          //imprimir productos que coincidan con la categoria inclutendo mayucusculas y minusculas
          arrayProductos=this.moduloProducto.filter(producto => producto.categoria.search(regex)!=-1 );
          console.log(arrayProductos);
          return arrayProductos;
        }else {
          arrayProductos=this.moduloProducto.filter(producto => producto.titulo.search(regex)!=-1 );
          return arrayProductos;
        }
        
      }
      
    }


    despliegue='none';
      //cambiar estado de despliegue del texto carrito
  desplegarTextoCarrito(){
    if(this.despliegue=='none'){
      this.despliegue='flex';
    }
  }
  ocultarTextoCarrito(){
    if(this.despliegue=='flex'){
      this.despliegue='none';
    }
  }

  mostrarCarrito(){
    this.dialog.open(CarritoComponent,{});
  }

  
  carrito=[{}];
  confirmation:any;
  verProducto(indice:number){
    indice=indice-1;
    this.confirmation=Swal.fire({
      title: this.moduloProducto[indice].titulo,
      text: "Quieres agregar este producto al carrito?",
      html: "<p>"+this.moduloProducto[indice].descripcion+"</p>"
      +"<p>Precio: $"+this.moduloProducto[indice].precio+"</p>",
      imageUrl: this.moduloProducto[indice].imagen,
      imageWidth: 250,
      imageHeight: 225,
      imageAlt: this.moduloProducto[indice].imagen,
      showCancelButton: true,
      confirmButtonText: "AGREGAR",
      cancelButtonText: "SALIR",
      confirmButtonColor: "black",
      cancelButtonColor: "red",
      reverseButtons: true
    }).then ((result) => {
      if(result.isConfirmed){
        CarritoModule.addOnCarrito(this.moduloProducto[indice]);
        Swal.fire(
          'Producto agregado',
          'El producto ha sido agregado al carrito',
          'success'
        )
        }
        this.carrito.push(this.moduloProducto[indice]);
        console.log(this.carrito);
      })
  }
}
