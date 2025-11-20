import { Injectable } from '@angular/core';
const carts_Key = 'shopping-cart';
@Injectable({
  providedIn: 'root',
})
export class carts {
  cartItems:{title: string, price: number, img:string}[]=[];
add(title: string, price: number, img:string){
  this.cartItems.push({title,price,img})
}
remove(index: number){
  this.cartItems.splice(index,1);
}
total(){
  return this.cartItems.reduce((sum, item)=> sum+ item.price,0);
}
  constructor() { 
const savedCart = localStorage.getItem(carts_Key);
if (savedCart) {
  this.cartItems = JSON.parse(savedCart);
}
  }
  private save(){
    localStorage.setItem(carts_Key, JSON.stringify(this.cartItems));
  }
  addToCart(title: string, price: number, img:string){
    this.cartItems.push({title, price, img});
    this.save();
  }
  removeFromCart(index: number){
    this.cartItems.splice(index, 1);
    this.save();
  }   
  clearCart(){
    this.cartItems = [];
    this.save();
  } 
  totalPrice(){
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}