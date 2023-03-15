import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import { ProductsService } from 'src/app/services/product/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {

  formReactive:FormGroup;


  
  
  titulo:string="";
  precio:number=0;
  imagen:string="";
  descripcion:string="";
  categoria:string="";
  proveedorId:number=0;

  id=0;
  constructor(private formBuilder:FormBuilder,public dialogRef: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,private http:HttpClient) {
      this.id=data.idProducto;
      console.log(this.id);
      this.titulo=data.titulo;
      this.precio=data.precio;
      this.imagen=data.imagen;
      this.descripcion=data.descripcion;
      this.categoria=data.categoria;
      this.proveedorId=data.proveedorId;

      this.formReactive=this.formBuilder.group(
        {
          titulo:['',[Validators.required,, Validators.minLength(3), Validators.maxLength(20)]],//Validators.pattern("[A-Za-z]")
          precio:['',[Validators.required,Validators.minLength(1), Validators.pattern(/^[0-9]{1,4}$/i)]],
          imagen:['',[Validators.required]],
          descripcion:['',[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
          categoria:['',[Validators.required,Validators.minLength(4)]]  ,  
          proveedor:['',[Validators.required,Validators.minLength(1), Validators.pattern(/^[1-9]{1}[0-9]{0,4}$/i)]]      },
      )
    }


  productObject=ProductoModule.productos;

  ngOnInit(): void {
    
  }

  modificarProducto(){

        let servicio=new ProductsService(this.http);
        servicio.getProveedorId(this.proveedorId).subscribe((data:any)=>
        {
          console.log(data);
          if(data.length>0){

            let servicioPut=new ProductsService(this.http);
            let miProducto:Product={
              idProducto:this.id,
              titulo:this.titulo,
              precio:this.precio,
              imagen:this.imagen,
              descripcion:this.descripcion,
              categoria:this.categoria,
              proveedorId:this.proveedorId
            }
            servicioPut.putProducto(miProducto).subscribe((data:any)=>{
              console.log(data);
              Swal.fire({
                title: 'EDITADO EXITOSAMENTE',
                text: 'Usted ha editado el producto con id : '+this.id,
                icon: 'warning',
                confirmButtonText: 'OK'
              });
              this.dialogRef.close();
              window.location.reload();

            });

          }else{
            Swal.fire({
              title: 'ERROR',
              text: 'El proveedor con id : '+this.proveedorId+' no existe',
              icon: 'warning',
              confirmButtonText: 'OK'
            });
                
        
            this.dialogRef.close();
          }
      });

  }

  salir(){
    this.dialogRef.close();
  }


  //validacion p
  getValue(value:string){
    return this.formReactive.get(value)
  }

  abrirVentana(input:string){
    if(input=="titulo"){
      Swal.fire(
        "TITULO INCORRECTO !",
        "El titulo debe tener un min de 3 y max. de 20 caracteres <br> Ejemplo: Canasta de plastico",
        "error"
      );
    }else if(input=="precio"){
      Swal.fire(
        "PRECIO INCORRECTO !",
        "El precio debe tener un min de 1 y max. de 4 numeros <br> Ejemplo: 1000",
        "error"
      );
    }else if(input=="imagen"){
      Swal.fire(
        "IMAGEN INCORRECTO !",
        "La imagen debe es obligatoria, y debe ser valida (es decir debe cargar en el cuadro del formulario).",
        "error"
      );
    }else if(input=="descripcion"){
      Swal.fire(
        "DESCRIPCION INCORRECTO !",
        "La descripcion debe tener un min de 10 y max. de 100 caracteres <br> Ejemplo: Esto es una canasta",
        "error"
      );
    }else if(input== "categoria"){
      Swal.fire(
        "CATEGORIA INCORRECTO !",
        "La categoria debe tener un min de 4 caracteres <br> Ejemplo: canasta",
        "error"
      );
    }
  }

}
