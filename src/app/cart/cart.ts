import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { carts } from '../carts';
import { Navbar } from "../navbar/navbar";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [Navbar,CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(private router: Router, private cartService: carts) { }
  price = 1000;
  couponValue = 10;
  couponCode = '';
  discount = 0;

  get cartItems(){
    return this.cartService.cartItems;
  }
  remove(i: number) {
    this.cartItems.splice(i, 1);
  }
   total(){
     return this.cartItems.reduce((sum,cart) => sum+cart.price, 0);
  }
  get couponEligible() { return this.total ()>= this.price; }
  get remainingForCoupon() { return Math.max(0, this.price - this.total()); }
  get grandTotal() { return Math.max(0, this.total() - this.discount); }

  applyCoupon() {
    const code = this.couponCode.trim().toUpperCase();
    if (code !== 'SAVE10') { 
      alert('Invalid coupon'); this.discount = 0; return; 
    }
    if (!this.couponEligible) {
       alert(`Add $${this.remainingForCoupon} more to unlock this coupon`); 
       return; 
      }
    this.discount = this.couponValue;
    alert(`Coupon applied: $${this.couponValue} off`);
  }
  ShowCheckOut(){
    this.router.navigateByUrl('/checkout');
  }
  
}
