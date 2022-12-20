import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import Swal from 'sweetalert2';
import { ProductsService } from  '../../services/product/products.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {
  constructor(private router:Router,private route:ActivatedRoute,private productsService:ProductsService){}

  ropaPlatzi:Product[]=[{id:'',title:'',price:0,description:'',category:'',image:''}];
  usuario:string='';

  
  ngOnInit(): void {
    this.usuario=this.route.snapshot.params['usuario'];
    this.productsService.getAllProducts().subscribe((data)=>{
      this.ropaPlatzi=data;
      console.log(this.ropaPlatzi);
    });


  }

  cerrarSesion(){
    this.router.navigate(['']);
  }


  carrito=[{}];
  //desplegar texto del carrito
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
    Swal.fire({
      title: 'Carrito de compras',
      html: "<h1>Mi Carrito de Compras</h1>"
      +" <table>"
      +" <tr>"
        +" <th>Producto</th>"
          +"  <th>Precio</th>"
          +"  <th>Cantidad</th>"
          +" <th>Subtotal</th>"
          +"</tr>"
        +"<tr>"
        +" <td>Camisa</td>"
          +"<td>$20</td>"
          +"<td>"
          +" <input type='number' value='1' min='1'>"
            +"</td>"
          +"<td>$20</td>"
          +"</tr>"
        +"<tr>"
        +"<td>Pantalón</td>"
          +"<td>$30</td>"
          +"<td>"
          +"<input type='number' value='1' min='1'>"
            +"</td>"
          +"<td>$30</td>"
          +"</tr>"
        +"<tr>"
        +"<td colspan='3'>Total:</td>"
          +"<td>$50</td>"
          +"</tr>"
        +"</table>"
      +"<button>Pagar</button>",
      showCloseButton: true,
    })
  }
  confirmation:any;
  verProducto(indice:number){
    
    this.confirmation=Swal.fire({
      title: this.ropaPlatzi[indice].title,
      text: "Quieres agregar este producto al carrito?",
      html: "<p>"+this.ropaPlatzi[indice].description+"</p>"
      +"<p>Precio: $"+this.ropaPlatzi[indice].price+"</p>",
      imageUrl: this.ropaPlatzi[indice].image,
      imageWidth: 250,
      imageHeight: 225,
      imageAlt: this.ropaPlatzi[indice].image,
      showCancelButton: true,
      confirmButtonText: "SI",
      cancelButtonText: "NO",
      confirmButtonColor: "black",
      cancelButtonColor: "red",
      reverseButtons: true
    }).then ((result) => {
      if(result.isConfirmed){
        Swal.fire(
          'Producto agregado',
          'El producto ha sido agregado al carrito',
          'success'
        )
        }
        this.carrito.push(this.ropaPlatzi[indice]);
        console.log(this.carrito);
      })
  }


}
