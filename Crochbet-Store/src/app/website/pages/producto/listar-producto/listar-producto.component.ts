import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import { ProductsService } from 'src/app/services/product/products.service';
import { environment } from 'src/environments/environment.development';
import { EditarClienteComponent } from '../../cliente/editar-cliente/editar-cliente.component';
import { EditarProductoComponent } from '../editar-producto/editar-producto.component';
import { EliminarProductoComponent } from '../eliminar-producto/eliminar-producto.component';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {
  constructor(public dialog:MatDialog,private route:Router,public http:HttpClient){}

  titulo:string="";
  precio:number=0;
  miImagen: string='';
  descripcion:string="";
  categoria:string="";
  proveedorId:number=0;


  Actualstatus="agregar";

  dataSource:any=[];

  //productObject:ProductoModule=new ProductoModule();

  productObject:Product[]=[];

  displayedColumns: string[] = ['id', 'title', 'price','image', 'description', 'category','proveedorId', 'actions'];

  async cargarProductos(){
    let products=new ProductsService(this.http);
    let result=await products.getProducts().subscribe((data:any)=>{
      this.productObject=data;
      console.log(this.productObject);
      if(sessionStorage.getItem('rol')!=environment.roles[2]){
        this.route.navigate(["administracion/error"])
      }else{
      this.dataSource=new MatTableDataSource<Product>(this.productObject as Product[]);
      }
    });
  }

  ngOnInit(): void {
    this.cargarProductos();
  }

  onSubmit(){
    let nuevo={
      idProducto: this.productObject.length+1,
      titulo: this.titulo,
      precio: this.precio,
      imagen: this.miImagen,
      descripcion: this.descripcion,
      categoria: this.categoria,
      proveedorId:this.proveedorId
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

  editarProducto(idCliente:string, titulo:string, precio:number, imagen:string, descripcion:string, categoria:string, proveedorId:number){
      this.dialog.open(EditarProductoComponent, {
        data: {
                'id':idCliente,
                'title':titulo,
                'price':precio,
                'image':imagen,
                'description':descripcion,
                'category':categoria,
                'proveedorId':proveedorId
              }
      });
  }

  eliminarProducto(idCliente:string){
    this.dialog.open(EliminarProductoComponent,{
      data: <number><unknown>idCliente
    });
    
    this.dialog.afterAllClosed.subscribe(result=>{
      this.productObject=ProductoModule.productos;
      this.dataSource=new MatTableDataSource<Product>(this.productObject as Product[]);
    });
  }


  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  } 
}
