import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CarritoModule } from 'src/app/modules/carrito/carrito.module';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  miCarrito=CarritoModule;
  constructor(public dialogRef: MatDialogRef<CarritoComponent>,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.miCarrito.geTotalCarrito());
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostrarPasarela(){
    this.dialogRef.close();
    this.router.navigate(['pasarela']);
  }


  //Paypal Checkout !

  addScript: boolean = false;

  finalAmount: number=1;

  paypalConfig={
    env:"sandbox",
    Client:{
      sandbox:'',
      production:''
    }

  }
}
