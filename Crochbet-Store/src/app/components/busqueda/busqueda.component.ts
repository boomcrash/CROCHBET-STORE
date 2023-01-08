import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { window } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  constructor(private router:Router,
    private route:ActivatedRoute,
    public dialog:MatDialog){

    }
  
    moduloProducto=ProductoModule.productos;




    ngOnInit(): void {

    }

    ngOnChanges(): void {

    }

    filtrarProductos(){
      let arrayProductos:Product[]=[];
      let filtrado=this.route.snapshot.params['filtro'];
      console.log(filtrado)
      var regex = new RegExp(filtrado,'gi');
      console.log(regex);
      arrayProductos=this.moduloProducto.filter(producto => producto.title.search(regex)!=-1 );
      if(arrayProductos.length==0){
        arrayProductos=this.moduloProducto.filter(producto => producto.category.search(regex)!=-1 );
      }
      if(filtrado=='todos'){
        return this.moduloProducto;
      }else{
        return arrayProductos;
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

}
