import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
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

  id=0;
  constructor(private formBuilder:FormBuilder,public dialogRef: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product){
      this.id=data.id;
      console.log(this.id);
      this.titulo=data.title;
      this.precio=data.price;
      this.imagen=data.image;
      this.descripcion=data.description;
      this.categoria=data.category;

      this.formReactive=this.formBuilder.group(
        {
          titulo:['',[Validators.required,, Validators.minLength(3), Validators.maxLength(20)]],//Validators.pattern("[A-Za-z]")
          precio:['',[Validators.required,Validators.minLength(1), Validators.pattern(/^[0-9]{1,4}$/i)]],
          imagen:['',[Validators.required]],
          descripcion:['',[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
          categoria:['',[Validators.required,Validators.minLength(4)]]      }
      )
    }


  productObject=ProductoModule.productos;

  ngOnInit(): void {
    
  }

  modificarProducto(){
    for (let index = 0; index < this.productObject.length; index++) {
      if(this.productObject[index].id==this.id){
        this.productObject[index].title=this.titulo;
        this.productObject[index].price=this.precio;
        this.productObject[index].image=this.imagen;
        this.productObject[index].description=this.descripcion;
        this.productObject[index].category=this.categoria;
        Swal.fire({
          title: 'EDITADO EXITOSAMENTE',
          text: 'Usted ha editado el producto con id : '+this.id,
          icon: 'warning',
          confirmButtonText: 'OK'
        });
        this.dialogRef.close();
      }
    }
  }

  salir(){
    this.dialogRef.close();
  }

}
