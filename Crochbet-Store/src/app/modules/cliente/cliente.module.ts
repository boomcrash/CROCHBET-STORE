import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from 'src/app/interfaces/cliente';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClienteModule {

  static clientes:Cliente[]=[
    {id: 1, nombre: 'Ruth Maria' , apellido: 'Quito Yambay' , ciudad: 'Guayaquil', direccion: 'Coop Juan Pablo II', telefono: '0923288134', correo: 'ruth@gmail.com'},
    {id: 2, nombre: 'Luis Aberto' , apellido: 'Herrera Guzman' , ciudad: 'Guayaquil', direccion: 'Juan moltalvo', telefono: '0925934238',correo: 'ruth@gmail.com'},
    {id: 3, nombre: 'William Daniel' , apellido: 'Quito Manya' , ciudad: 'Riobamba', direccion: 'La libertad', telefono: '0329331236', correo: 'ruth@gmail.com'},
    {id: 4, nombre: 'Cesar Francisco' , apellido: 'Lopez Gonzalo' , ciudad: 'Loja', direccion: 'Macará', telefono: '0923456182', correo: 'ruth@gmail.com'},
    {id: 5, nombre: 'Brayan Leonel' , apellido: 'Carrillo Guzman' , ciudad: 'Ambato', direccion: 'Los recintos', telefono: '0923133234', correo: 'ruth@gmail.com'},
    {id: 6, nombre: 'Gilda Lissette' , apellido: 'Chiquito Reyes' , ciudad: 'Manta', direccion: 'Cdl. las alajas', telefono: '0989364092', correo: 'ruth@gmail.com'},
    {id: 7, nombre: 'Carla Jessenia' , apellido: 'Coello Sanchez' , ciudad: 'Guayaquil', direccion: 'San andrés', telefono: '0932254093', correo: 'ruth@gmail.com'},
    {id: 8, nombre: 'Adrina Mishell' , apellido: 'Auquilla Quinto' , ciudad: 'Quevedo', direccion: 'Santa Rosa', telefono: '0934244093', correo: 'ruth@gmail.com'},
    {id: 9, nombre: 'Joselyn Maribel' , apellido: 'Cepeda Hernandez' , ciudad: 'Riobamba', direccion: 'La dolorosa', telefono: '0834354093', correo: 'ruth@gmail.com'},
    {id: 10, nombre: 'Bestsaida Valentina' , apellido: 'Montero Herrera' , ciudad: 'Riobamba', direccion: 'Punin', telefono: '0923254093', correo: 'ruth@gmail.com'}
  ]

  static ciudades = [
    'Riobamba',
    'Guayaquil',
    'Ambato',
    'Quevedo',
    'Ambato',
    'Manta'
  ]
}
