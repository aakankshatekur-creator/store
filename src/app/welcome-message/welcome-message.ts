import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-message',
  imports: [],
  templateUrl: './welcome-message.html',
  styleUrl: './welcome-message.css',
})
export class WelcomeMessage implements OnInit {
  constructor(private router :Router) { }
  message:string="";
  
   ngOnInit() {
     this.message="welcome , Happy shopping :) "
     setTimeout(()=> {
       this.message=" ",
       this.router.navigateByUrl('/login');
   },2000)
   
 }
}
