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

  ropaCrochbet:Product[]=[{id:0,title:'',price:0,description:'',category:'',image:''}];
  usuario:string='';

  //ropaPlatzi:Product[]=[{id:'',title:'',price:0,description:'',category:'',image:''}];
  ngOnInit(): void {
    this.usuario=this.route.snapshot.params['usuario'];
    /*this.productsService.getAllProducts().subscribe((data)=>{
      this.ropaPlatzi=data;
      console.log(this.ropaPlatzi);
    });*/

    /*this.productsService.getProducts().subscribe((data)=>{
      console.log(data);
    });*/

    this.ropaCrochbet=[
      {id: 1, title: 'Blusa romina ' , price: 40, description: 'Blusa blanca con escote en la espalda, ideal para temporadas de verano.', category: 'blusas', image: 'https://1.bp.blogspot.com/-51nRaSdrM78/UfHMzPLYEEI/AAAAAAAAPx0/cUxUjilfeFI/s1600/crochetemodan0315.jpg'},
      {id: 2, title: 'Blusa a ganchillo' , price: 30, description: 'Prenda semiformal tejido con lana, sin cuello ni mangas largas.', category: 'blusas', image: 'https://www.handworkdiy.com/wp-content/uploads/2022/03/top-de-ganchillo-3.png'},
      {id: 3, title: 'Blusa glamurosa' , price: 45, description: 'Blusa glamurosa tejido a crochet , de tipo formal e ideal para épocas de verano.', category: 'blusas', image: 'https://i.pinimg.com/originals/3b/2e/a0/3b2ea0de8b9b1a6004f757ad23c70b70.png'},
      {id: 4, title: 'Blusa romántico' , price: 25, description: 'Blusa de estilo romático tejido de lana de alpaca ideal para épocas de verano.', category: 'blusas', image: 'https://www.handworkdiy.com/wp-content/uploads/2021/12/blusa-crochet-aurora.png'},
      {id: 5, title: 'Brazalete con puntos piñas' , price: 5, description: 'Pulseras tejidas con puntos piñas de medios puntos, tejidos con lana de oveja merino', category: 'brazaletes', image: 'http://3.bp.blogspot.com/-0NqN0rHF9QY/UKu6HILK-bI/AAAAAAAAGNc/j63iIw7YEJA/s1600/Brazaletes+de+crochet.jpg'},
      {id: 6, title: 'Brazalete con canutillos' , price: 15, description: 'Brazalete tejido con lana de alpaca, multicolor con canutillos y botones.', category: 'brazaletes', image: 'https://i.ytimg.com/vi/s6x5gN4h7LM/hqdefault.jpg'},
      {id: 7, title: 'Brazalete tipo monedero' , price: 10, description: 'Brazalete tedijo con lana de mohair, que a su vez hace la función de monedero.', category: 'brazaletes', image: 'https://i.ytimg.com/vi/7KWZXoYGTuY/sddefault.jpg'},
      {id: 8, title: 'Brazalete ganchillo' , price: 15, description: 'Brazalete multicolor tedijo con lana de mohair.', category: 'brazaletes', image: 'https://i.pinimg.com/236x/bf/c1/d3/bfc1d3309aaf92672c19b0119d7b38c1--cuff-bracelets-ice-cream.jpg'},
      {id: 9, title: 'Minifaldas ' , price: 12, description: 'Falda corta tejida con lana tipo algodón, color azul y juvenil.', category: 'faldas', image: 'https://i.pinimg.com/564x/f7/46/ae/f746ae617584db7a36606aac73659938.jpg'},
      {id: 10, title: 'Falda lapiz o tubo' , price: 16, description: 'Falda semilarga de tipo tubo o lapiz, formal, perfecta para resaltar tu silueta.', category: 'faldas', image: 'https://i.pinimg.com/564x/a3/24/31/a32431774f8d2ebb19b084434abe9ad8.jpg'},
      {id: 11, title: 'Falda acampanadas' , price: 20, description: 'Falda de tipo acampanadas tejido con lana de alpaca, ideal para usarlas con tacones.', category: 'faldas', image: 'https://i.pinimg.com/564x/aa/4b/a4/aa4ba407e23da8750ccc30bdacadfb72.jpg'},
      {id: 12, title: 'Falda tubo' , price: 18, description: 'Falda tubo tejido con lana de alpaca, de tipo formal y sexy.', category: 'faldas', image: 'http://4.bp.blogspot.com/-1SGVfMgOczE/VTuv0GUYE1I/AAAAAAAAj1Y/qxTz2qo1VlM/s1600/esq0.jpg'},
      {id: 13, title: 'Falda acampanadas' , price: 20, description: 'Falda largas acampanadas tejido con lana de oveja.', category: 'faldas', image: 'https://i.pinimg.com/236x/20/82/54/20825480e786e27cea65a2c19a872d07.jpg'},
      {id: 14, title: 'Gorro con pompon' , price: 7, description: 'Gorros tejidos con lana de algodón, ideales para viajar a los andes.', category: 'gorros', image: 'https://i.pinimg.com/originals/45/f5/f0/45f5f0745074b52ce6b0c5a88c8b7032.jpg'},
      {id: 15, title: 'Gorro de rana' , price: 10, description: 'Gorro rana para niños, tejidos con lana de alpaca.', category: 'gorros', image: 'https://i.pinimg.com/236x/7f/58/3b/7f583b8f0dffb0900c3752e9828d80e5.jpg'},
      {id: 16, title: 'Gorro solada' , price: 8, description: 'Gorros de tipo solada, para toda edad. Al ser diseñado con boinas reverso permite que las orejas y la cara se mantengan cálidas.', category: 'gorros', image: 'https://i0.wp.com/tejidosalcrochet.cl/crochet/wp-content/uploads/2018/08/Gorros-tejidos-a-crochet-paso-a-paso.jpg'},
      {id: 17, title: 'Gorro navideño' , price: 12, description: 'Gorro navideño para mujer, tejido de algodón.', category: 'gorros', image: 'https://http2.mlstatic.com/D_NQ_NP_786041-MLM48271811799_112021-W.jpg'},
      {id: 18, title: 'Paper bag shorts' , price: 25, description: 'Shorts de tipo paper bag, tejidos con lana de algodón', category: 'shorts', image: 'https://i.ytimg.com/vi/782bzNCseG4/maxresdefault.jpg'},
      {id: 19, title: 'Shorts deportivos' , price: 22, description: 'Shorts de tipo deportivo, tejidos con lana de alpaca.', category: 'shorts', image: 'https://i.pinimg.com/236x/96/ba/93/96ba9369de5b31701eb9eac289b4626b.jpg'},
      {id: 20, title: 'Falda short' , price: 23, description: 'Falda short de lana de algodón, fusiona la comodidad de un pantalón y la elegancia de una falda.', category: 'shorts', image: 'https://i.pinimg.com/originals/f8/d1/79/f8d17946dc0f484f2e14b8f3c55fe279.jpg'},
      {id: 21, title: 'Short deportivo' , price: 23, description: 'Short deportivo tejido con lana de oveja.', category: 'shorts', image: 'https://i.ytimg.com/vi/782bzNCseG4/maxresdefault.jpg'},
      {id: 22, title: 'Falda pantalón' , price: 45, description: 'Pantalon blanco tipo falda, hechas de lana de algodón.', category: 'pantalones', image: 'https://i.ytimg.com/vi/b-S7okH57dk/maxresdefault.jpg'},
      {id: 23, title: 'Pantalon con basta ancha' , price: 54, description: 'Pantalon verde oscuro con basta ancha, tejidos con lana de oveja.', category: 'pantalones', image: 'https://i.pinimg.com/236x/14/61/72/1461728279faa40e75f309ec89ae6999.jpg'},
      {id: 24, title: 'Calentadores' , price: 43, description: 'Pantalon de tipo calentadores con bastas tubo, tejidos con lana de algodón', category: 'pantalones', image: 'https://i.pinimg.com/236x/a3/9f/ee/a39fee05b7c4d44abb30a479867ad6ed.jpg'},
      {id: 25, title: 'Pantalon para niñas' , price: 15, description: 'Pantalon para niñas entre 1 a 2 años hechas de algodón.', category: 'pantalones', image: 'https://i.pinimg.com/736x/d3/77/bf/d377bf00733a566ad3ad00dad66438f9.jpg'},
      {id: 26, title: 'Retro bikini' , price: 20, description: 'Traje baño tipo retro bikini, tejido con lana de lino', category: 'trajes', image: 'https://i.pinimg.com/236x/f3/50/f9/f350f9397a072a8f5d47ca9ed83a7a81.jpg'},
      {id: 27, title: 'Prenda de baño microkini ' , price: 15, description: 'Traje de baño tipo microkini, de lino.', category: 'trajes', image: 'https://i.pinimg.com/236x/29/bd/83/29bd83a3ef78a5d6fa1bcfb6496e3016.jpg'},
      {id: 28, title: 'Prenda de baño de una sola pieza' , price: 21, description: 'Traje de baño de una sola pieza, de algodón.', category: 'trajes', image: 'https://i.pinimg.com/564x/1a/09/bf/1a09bfadc0dc9cdc4315ee1e4a62d949.jpg'},
      {id: 29, title: 'Bikini infantil' , price: 12, description: 'Traje de baño para niñas de una sola pieza modelo bikini, de algodón.', category: 'trajes', image: 'https://i.ytimg.com/vi/rB4sTLMBwtU/maxresdefault.jpg'},
      {id: 30, title: 'Pareo tipo falda' , price: 11, description: 'Pareo blanco, tejidos con lana de alpaca.', category: 'pareos', image: 'https://i.pinimg.com/236x/00/26/4d/00264dcc5980c0a6f8353feb2ef55a90.jpg'},
      {id: 31, title: 'Pareo tipo pañuelo' , price: 12, description: 'Pareo en color blanco realizado con la técnica tejido crochet o ganchillo. Fresco e informal para temporadas de verano.', category: 'pareos', image: 'https://www.crochet.com.ar/Modelos/pareo.jpg'},
      {id: 32, title: 'Pareo tipo vestido' , price: 34, description: 'Pareo tipo vestido, tejido de lana de oveja.', category: 'pareos', image: 'https://i.pinimg.com/564x/fa/b1/f4/fab1f44038c1b2542bc9c0828873ad50.jpg'},
      {id: 33, title: 'Pareo playeros' , price: 23, description: 'Pareo playeros tipo vestido, de algodón.', category: 'pareos', image: 'https://http2.mlstatic.com/D_NQ_NP_879410-MLU48242233985_112021-W.jpg'},
      {id: 34, title: 'Calcetines básicos' , price: 5, description: 'Medias amarillas semilarga de algodón.', category: 'medias', image: 'https://staging.crochetisimo.com/wp-content/uploads/2021/11/PATRON-GRATIS-Calcetines-Basicos-en-Crochet-para-Principiante1.jpg'},
      {id: 35, title: 'Medias tipo botas' , price: 14, description: 'Medias largas tipo botas con mullos en su lateral, tejido con lana de alpaca.', category: 'medias', image: 'https://i.pinimg.com/474x/e5/26/b7/e526b79b1b8b0f67b72cfd9b58c6ed98.jpg'},
      {id: 36, title: 'Pantuflas' , price: 10, description: 'Medias cortas de tipo pantuflas, tejidos de lana de oveja.', category: 'medias', image: 'https://i.pinimg.com/564x/f0/98/e2/f098e28f608ba8e985ba73d87ee773fa.jpg'},
      {id: 37, title: 'Medias altas' , price: 10, description: 'Medias altas o calcetines largo hasta la rrodilla, de algodón', category: 'medias', image: 'https://ae01.alicdn.com/kf/He162930f6b8449cf9ed8c562f748ec5ds/2019-medias-largas-trenzadas-tejidas-por-encima-de-la-rodilla-medias-suaves-de-invierno-abrigadas-informales.jpg'},
      {id: 38, title: 'Tapetes estrelladas' , price: 8, description: 'Tapete estrellada para cocinas.', category: 'tapetes', image: 'https://i.pinimg.com/236x/ad/a7/61/ada761a18660618733222ec77e1b7d4e.jpg'},
      {id: 39, title: 'Tapetes redondas' , price: 20, description: 'Tapete redondo para pisos de la sala o cuartos.', category: 'tapetes', image: 'https://i.pinimg.com/236x/d7/7e/58/d77e586126c3479da9235a24c0751686.jpg'},
      {id: 40, title: 'Tapetes rectangulares' , price: 23, description: 'Tapetes rectangulares para el comedor.', category: 'tapetes', image: 'https://i.pinimg.com/564x/0d/5b/96/0d5b961a317f357c64a741d4845bd71a.jpg'},
      {id: 41, title: 'Tapetes redondas' , price: 23, description: 'Tapetes floreadas para mesa.', category: 'tapetes', image: 'https://i.pinimg.com/564x/5d/52/6e/5d526e1ed13ad576884dc5c88d4d4a3e.jpg'},



      {id: 42, title: 'Alfombra Calavera', price: 70, description: 'Alfombra tejida a crochet en forma de calavera con bordes redondos de diferentes colores', category: 'Alfombras', image: 'https://i.pinimg.com/originals/ea/33/62/ea3362a93f58429be977db2494f2bff5.png'},
      {id: 43, title: 'Alfombra Triangulos', price: 65, description: 'Alfombra tejida a crochet cuadrada compuesta por diferentes triangulos', category: 'Alfombras', image: 'https://i.pinimg.com/originals/c5/6e/9f/c56e9f001e961aab4ddeadbb4b2952d6.jpg'},
      {id: 44, title: 'Alfombra Hexagonos', price: 86, description: 'Alfombra tejida en forma de hexagonos de diferentes colores', category: 'Alfombras', image: 'https://i.pinimg.com/originals/77/e8/02/77e8023956af904d281724a0d1668a23.jpg'},
      {id: 45, title: 'Alfombra Curvas', price: 66, description: 'Alfombra tejida en forma de curvas de diferentes colores', category: 'Alfombras', image: 'https://i.pinimg.com/564x/0a/57/19/0a571974fe69d2c7ef4d1e33a4f45bb9.jpg'},
      {id: 46, title: 'Cojin Dona', price: 89, description: 'Cojin tejido a crochet en forma de dona', category: 'Cojines', image: 'https://www.budget101.com/wp-content/uploads/2017/03/crochet-donut-cushions-pattern-tutorial-.jpeg'},
      {id: 47, title: 'Cojin Estrella', price: 70, description: 'Cojin tejido a crochet en forma de Estrella de mar', category: 'Cojines', image: 'https://stateless.yourcrochet.com/2020/03/0-star-pillows-2.png'},
      {id: 48, title: 'Cojin Mandala', price: 68, description: 'Cojin tejido a crochet en forma de mandalas', category: 'Cojines', image: 'https://i.pinimg.com/564x/26/cf/d9/26cfd9b221f5d96ae80c0cd1a1138205.jpg'},
      {id: 49, title: 'Cojin Trenza', price: 86, description: 'Cojin tejido a crochet con formas de tenzas en el tejido', category: 'Cojines', image: 'https://i.pinimg.com/564x/1c/c7/0d/1cc70d16f7842d185cac5ad8b3c1b80b.jpg'},
      {id: 50, title: 'Cobertor Corazones', price: 75, description: 'Cobertor tejido a crochet en forma de corazones', category: 'Cobertores', image: 'https://stateless.patterncenter.com/2019/08/filet-heart-crochet-baby-blanket-free-crochet-pattern-621x1024.jpg'},
      {id: 51, title: 'Cobertor a Cuadros', price: 80, description: 'Cobertor tejido a corchet en forma de cuadros de diferentes colores', category: 'Cobertores', image: 'https://www.recreoviral.com/wp-content/uploads/2018/09/crochet-manras-recreoviral-4-525x700.jpg'},
      {id: 52, title: 'Cobertor Pompo', price: 90, description: 'Cobertor tejido a crochet con pompos en el borde', category: 'Cobertores', image: 'https://i.pinimg.com/564x/f1/68/70/f16870e05cc1847663114680c8c7015e.jpg'},
      {id: 53, title: 'Cobertor Flores', price: 180, description: 'Cobertor tejido a crochet hecho a base de flores 3D', category: 'Cobertores', image: 'https://i.pinimg.com/564x/91/54/c5/9154c57851914d3e59c046569b9788b7.jpg'},
      {id: 54, title: 'Abrigo Arcoiris', price: 70, description: 'Abrigo tejido a crochet con los colores del arcoiris', category: 'Abrigos', image: 'https://i.pinimg.com/564x/d1/52/0e/d1520ef357f630ce7ba387b182373b89.jpg'},
      {id: 55, title: 'Abrigo Colores', price: 80, description: 'Abrigo tejido a crochet con diferentes colores a base de granny square', category: 'Abrigos', image: 'https://i.pinimg.com/564x/bc/76/3f/bc763f7ab035c1fa59ed30317093ef8f.jpg'},
      {id: 56, title: 'Abrigo Flores', price: 115, description: 'Abrigo tejido a crochet con incrustaciones de flores tejidas', category: 'Abrigos', image: 'https://i.pinimg.com/564x/1b/99/57/1b9957d66b8a34513888c8aaa123577d.jpg'},
      {id: 57, title: 'Abrigo Lily', price: 75, description: 'Abrigo tejido a crochet con diferentes tonos de lila', category: 'Abrigos', image: 'https://i.pinimg.com/564x/71/69/72/716972c751dfc2d062f95cadd1348c79.jpg'},
      {id: 58, title: 'Cardigan Basico', price: 50, description: 'Cardigan basico tejido a crochet con manga larga', category: 'Cardigan', image: 'https://i.pinimg.com/564x/d5/82/ad/d582addbdf674c8559c2f3924e68882a.jpg'},
      {id: 59, title: 'Cardigan Ovejas', price: 89, description: 'Cardigan tejido a crochet con incrustaciones de figuras de ovejas tejidas a crochet', category: 'Cardigan', image: 'https://i.pinimg.com/564x/f0/33/c4/f033c447073e00b49dab52b5e8f188b7.jpg'},
      {id: 60, title: 'Cardigan Flores', price: 94, description: 'Cardigan tejido a crochet con incrustaciones de flores tejidas', category: 'Cardigan', image: 'https://i.pinimg.com/564x/b5/50/3e/b5503e3885bb3ca6d7f77f5abde86321.jpg'},
      {id: 61, title: 'Cardigan Granny', price: 124, description: 'Cardigan tejido a crochet a base de granny square', category: 'Cardigan', image: 'https://i.pinimg.com/564x/21/aa/d5/21aad53baba09d994669dd59e3df44f1.jpg'},
      {id: 62, title: 'Bufanda Karla', price: 25, description: 'Bufanda tejida a crochet de diferentes colores', category: 'Bufandas', image: 'https://i.pinimg.com/564x/90/48/0f/90480f29959920a5ab01e158bb913201.jpg'},
      {id: 63, title: 'Bufanda Meche', price: 58, description: 'Bufanda tejida a crochet con mechas en el borde', category: 'Bufandas', image: 'https://i.pinimg.com/736x/c0/8d/f0/c08df0c5a3b5cbaf1e78e74ef45d13d8.jpg'},
      {id: 64, title: 'Bufanda Corta Botones', price: 20, description: 'Bufanda tejida a crochet corta con botones en el borde', category: 'Bufandas', image: 'https://i.pinimg.com/564x/5c/cf/47/5ccf47a63346f73a5a53aa7fa1bfa67a.jpg'},
      {id: 65, title: 'Bufanda Tematica', price: 70, description: 'Bufanda tejida a crochet con tematica de recortes', category: 'Bufandas', image: 'https://i.pinimg.com/564x/80/a5/e7/80a5e74f2000f65088f2937ddd02f6b4.jpg'},
      {id: 66, title: 'Guante Boton', price: 15, description: 'Par de Guantes tejidos a crochet con un botón en el borde', category: 'Guantes', image: 'https://i.pinimg.com/564x/d4/6c/65/d46c652764febcab40e1ca8651e0bf55.jpg'},
      {id: 67, title: 'Guante Corazon', price: 23, description: 'Par de Guantes tejidos a crochet con figura de Corazon ', category: 'Guantes', image: 'https://i.pinimg.com/564x/51/79/44/517944f55909ecc5d6932dd721790f8f.jpg'},
      {id: 68, title: 'Guante Jade', price: 18, description: 'Par de Guantes tejidos a crochet con patrones unicos en la parte superior de la mano', category: 'Guantes', image: 'https://i.pinimg.com/736x/a2/48/d5/a248d53e23556dff24e779b9704f8010.jpg'},
      {id: 69, title: 'Guante Grinch', price: 38, description: 'Par de Guantes tejidos a crochet con imagen del grinch', category: 'Guantes', image: 'https://i.pinimg.com/564x/e4/d5/3b/e4d53b68a08ca28e303753378b893630.jpg'},
      {id: 70, title: 'Aretes Comida', price: 10, description: 'Par de aretes tejidos a crochet en forma de comida', category: 'Aretes', image: 'https://i.pinimg.com/564x/43/d8/b7/43d8b7352f69b88c897dd9c4e5ab4779.jpg'},
      {id: 71, title: 'Aretes Formas', price: 15, description: 'Par de aretes tejidos a crochet en diferentes formas y colores', category: 'Aretes', image: 'https://i.pinimg.com/564x/70/f6/f4/70f6f4808576d0d1d5fd880b0f5f5c3e.jpg'},
      {id: 72, title: 'Aretes Flores', price: 10, description: 'Par de aretes tejidos a crochet en forma de flores y hojas', category: 'Aretes', image: 'https://i.pinimg.com/564x/c6/8c/5c/c68c5c15b7453620986a13ddc0583979.jpg'},
      {id: 73, title: 'Aretes Girasol', price: 10, description: 'Par de aretes tejidos a crochet en forma de Girasoles', category: 'Aretes', image: 'https://i.pinimg.com/564x/72/31/4f/72314f13df52ad7f4464ebc48b72f9e7.jpg'},
      {id: 74, title: 'Turbante Basico', price: 16, description: 'Turbante tejido a crochet en forma basica de diferentes colores', category: 'Turbantes', image: 'https://i.pinimg.com/564x/f5/43/75/f543751bcbaa12807740af2ebc702745.jpg'},
      {id: 75, title: 'Turbante Nudos', price: 18, description: 'Turbante tejido a crochet con forma de nudos', category: 'Turbantes', image: 'https://i.pinimg.com/564x/a6/9a/52/a69a5252948cfe73c87278f20a7bd358.jpg'},
      {id: 76, title: 'Turbante Bebes', price: 15, description: 'Turbante tejido a crochet para bebes de todos los colores', category: 'Turbantes', image: 'https://i.pinimg.com/564x/05/ae/14/05ae141412b297fc44f47bae6b843622.jpg'},
      {id: 77, title: 'Turbante Elastico', price: 17, description: 'Turbante tejido a crochet con parte elastica', category: 'Turbantes', image: 'https://i.pinimg.com/564x/50/58/e5/5058e57c68713bbf485f2fed8c733f71.jpg'},
      {id: 78, title: 'Bolso Flores', price: 46, description: 'Bolso tejido a crochet con figuras de flores incrustadas', category: 'Bolsos', image: 'https://i.pinimg.com/564x/19/50/1f/19501faa0f0e91a49814fa9c21a45075.jpg'},
      {id: 79, title: 'Bolso Tricolor', price: 89, description: 'Bolso tejido a crochet tricolor', category: 'Bolsos', image: 'https://i.pinimg.com/564x/19/ee/63/19ee6369004eec9184139c0186d530d9.jpg'},
      {id: 80, title: 'Bolso Zanahoria', price: 75, description: 'Bolso tejido a crochet con figura de zanahoria incrustada', category: 'Bolsos', image: 'https://i.pinimg.com/564x/99/65/f4/9965f4a493dbd517c470f9fd0e5ffa68.jpg'},
      {id: 81, title: 'Bolso Animales', price: 95, description: 'Bolso tejido a crochet con formas de animales', category: 'Bolsos', image: 'https://i.pinimg.com/564x/d3/4f/3a/d34f3a080bcc247a48a5d72eb4836139.jpg'},

    ]
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
      title: this.ropaCrochbet[indice].title,
      text: "Quieres agregar este producto al carrito?",
      html: "<p>"+this.ropaCrochbet[indice].description+"</p>"
      +"<p>Precio: $"+this.ropaCrochbet[indice].price+"</p>",
      imageUrl: this.ropaCrochbet[indice].image,
      imageWidth: 250,
      imageHeight: 225,
      imageAlt: this.ropaCrochbet[indice].image,
      showCancelButton: true,
      confirmButtonText: "AGREGAR",
      cancelButtonText: "SALIR",
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
        this.carrito.push(this.ropaCrochbet[indice]);
        console.log(this.carrito);
      })
  }


  filtrarCategoria(categoria:string){
    let arrayFiltrado:Product[]=[];
    let contador=1;
    for(let item of this.ropaCrochbet){
      if(item.category.toLocaleLowerCase()==categoria.toLocaleLowerCase()&&contador<=4){
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
}
