import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import Swal from 'sweetalert2';
import { CarritoComponent } from '../carrito/carrito.component';
import {MatDialog} from '@angular/material/dialog';
import { CarritoModule } from 'src/app/modules/carrito/carrito.module';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from 'src/app/services/product/products.service';


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  constructor(private router:Router,
    private route:ActivatedRoute,
    //private productsService:ProductsService,
    public dialog:MatDialog,public http:HttpClient){}

  moduloProducto:Product[]=[];

  categorias=[''];

  usuario:string | null='';

  rol:string | null='';

  miCarrito=(new CarritoModule());

  //ropaPlatzi:Product[]=[{id:'',title:'',price:0,description:'',category:'',image:''}];
 
  async cargarProductos(){
    let products=new ProductsService(this.http);
    let result=await products.getProducts().subscribe((data:any)=>{
      this.moduloProducto=data;
      console.log(this.moduloProducto);
    });
  }

  async cargarCategorias(){
    let products=new ProductsService(this.http);
    let result=await products.getCategories().subscribe((data:any)=>{
      const categorias = data.map((objeto: { categoria: string; }) => objeto.categoria);
      console.log(categorias);
      this.categorias=categorias;
      console.log(this.categorias);
    });
  }
  

  ngOnInit(): void {
    try{
      this.usuario=sessionStorage.getItem('usuario');
      this.rol=sessionStorage.getItem('rol');
      if(this.rol==null){
        this.router.navigate(['']);
      }else{
        this.cargarProductos();
        this.cargarCategorias();
      }
    }catch(e){
      console.log('este usuario no tiene sesion iniciada');
      this.router.navigate(['']);
    }
    
    /*this.productsService.getAllProducts().subscribe((data)=>{
      this.ropaPlatzi=data;
      console.log(this.ropaPlatzi);
    });*/

    /*this.productsService.getProducts().subscribe((data)=>{
      console.log(data);
    });*/
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
    this.dialog.open(CarritoComponent,{data:this.rol});
  }
  
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


  filtrarCategoria(categoria:string){
    let arrayFiltrado:Product[]=[];
    let contador=1;
    for(let item of this.moduloProducto){
      if(item.categoria.toLocaleLowerCase()==categoria.toLocaleLowerCase()&&contador<=4){
        arrayFiltrado.push(item);
        contador++;
      }
    }
    return arrayFiltrado;
  }


  noDisponible(){
      // opcion deshabilitada por el momento
      Swal.fire({
        title: 'Opcion deshabilitada',
        text: 'Esta opcion se habilitara en un futuro',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
  }


  buscar(filtro:string){

    this.router.navigate(['inicio/busqueda',filtro,'categoria']);
    console.log(filtro);
    
  }
}
