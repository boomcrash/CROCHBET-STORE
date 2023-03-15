import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import { ProductsService } from 'src/app/services/product/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent {
  id=0;

  constructor(public dialogRef: MatDialogRef<EliminarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,private http:HttpClient) {
      this.id=data;
      console.log(this.id);
    }


  productObject=ProductoModule.productos;

  ngOnInit(): void {
    
  }

  
  eliminarProducto(){
    console.log("id",this.id);
    let servicios=new ProductsService(this.http);
    
    servicios.deleteProducto(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data == true) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto eliminado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close();
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al eliminar el producto',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close();
        }
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  salir()
  {
    this.dialogRef.close();
  }
}
