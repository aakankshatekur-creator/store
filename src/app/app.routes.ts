import { Routes } from '@angular/router';
import { Checkout } from './checkout/checkout';
import { WelcomeMessage } from './welcome-message/welcome-message';
import { Apparel } from './apparel/apparel';
import { Books } from './books/books';
import { Electronics } from './electronics/electronics';
import { Navbar } from './navbar/navbar';
import { Login } from './login/login';
import { ProductDetails } from './product-details/product-details';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {
        path:"checkout",
        component: Checkout
      },
      {
        path:"welcome",
        component: WelcomeMessage
      },
      {
        path:'',
        redirectTo:'welcome',
        pathMatch:'full'
      },
      {
       path:'apparel',
       component: Apparel
      },
      {
        path:'books',
        component: Books
       },
       {
         path: 'electronics',
         component: Electronics
       },
       {
        path:'cart',
        component: Cart
       },
       {
         path: "navigation",
         component: Navbar
       },
       {
         path: "login",
         component:Login
       },
       {
         path:"product-details",
         component: ProductDetails
       }
    
    
];
