import { Component, Inject } from '@angular/core';
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
  id=0;

  constructor(public dialogRef: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product){
      this.id=data.id;
      console.log(this.id);
    }


  productObject=ProductoModule.productos;

  ngOnInit(): void {
    
  }

  modificarProducto(){
    for (let index = 0; index < this.productObject.length; index++) {
      if(this.productObject[index].id==this.id){
        this.productObject.splice(index,1);
        Swal.fire({
          title: 'ELIMINADO EXITOSAMENTE',
          text: 'Usted ha eliminado el cliente con id : '+this.id,
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
