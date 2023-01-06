import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { CarritoModule } from 'src/app/modules/carrito/carrito.module';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  miCarrito=CarritoModule;
  constructor() { }
  ngOnInit(): void {
    console.log(this.miCarrito.geTotalCarrito());
  }
}
