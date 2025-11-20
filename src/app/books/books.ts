import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Router } from '@angular/router';
import { carts } from '../carts';

@Component({
  selector: 'app-books',
  imports: [Navbar],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  url1:string="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668055960/it-ends-with-us-9781668055960_hr.jpg";
  url2:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnQP0FJ1RbQ5kp-8HXHORPjy1yXoBs9qAKQ&s';
   constructor( private route: Router, private cartService: carts) { }
   book1(){
     this.cartService.add("book1",100,this.url1)
     alert("item added to cart")
   }
   book2(){
     this.cartService.add("book2",100,this.url2)
     alert("item added to cart")
   }
   onImageClick1(){
     this.route.navigate(['/product-details'], {queryParams:{
       book1:this.url1,
     } })
   }
   onImageClick2(){
     this.route.navigate(['/product-details'], {queryParams:{
       book2:this.url2,
     } })
   }
 
}
