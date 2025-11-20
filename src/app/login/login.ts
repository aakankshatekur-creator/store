import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  error: string="";

  constructor(private route:Router) { }
  username="";
  password="";
  login(){
    new Promise<any>((resolve,reject)=>{
      if(this.username=='aakanksha' && this.password=='akshaya'){
        resolve("yes your credentials are correct");
      }else{
        reject("Incorrect Username or Password")
      }
    })
    .then(()=>{
      this.route.navigateByUrl('/navigation')
    }).catch(err => this.error= String(err));
  }
}
