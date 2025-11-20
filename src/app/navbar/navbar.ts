import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  search: string='';
  constructor( private router : Router) { }
    
    submit(){
      if (this.search=='books'){
       this.router.navigateByUrl('/books')
      }
      if (this.search=='dress'){
        this.router.navigateByUrl('/apparel')
       }
       if (this.search=='electronics'){
        this.router.navigateByUrl('/electronics')
       }
      }
  apparel(){
    this.router.navigateByUrl("/apparel");
  }
  books(){
    this.router.navigateByUrl("/books");
  }
  cart(){
    this.router.navigateByUrl("/cart");
  }
  electronics(){
    this.router.navigateByUrl("/electronics");
  }

} 

