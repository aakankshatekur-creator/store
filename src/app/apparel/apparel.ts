import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { carts } from '../carts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apparel',
  imports: [Navbar],
  templateUrl: './apparel.html',
  styleUrl: './apparel.css',
})
export class Apparel {
  constructor( private cartService: carts, private router: Router) { }

  url :string= 'assets/images/mani.jpg';
  urlw:string='assets/images/vaishu.jpg';
  addWomenCart(){
    this.cartService.add('dresses', 40,this.urlw);
    alert("item added to cart")
  }
  addMenCart(){
    this.cartService.add('dresses', 40,this.url);
    alert("item added to cart")
  }
  onImageClickw(){
    this.router.navigate(['/product-details'], {queryParams:{
      womendress:this.urlw,
    } })
  }
  onImageClick(){
    this.router.navigate(['/product-details'], {queryParams:{
      mendress:this.url,
    } })
  }
}
