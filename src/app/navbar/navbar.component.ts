import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
  public cartitems:number=0;
  constructor(private cart:CartService){} 

  
  
  ngOnInit(): void {
   this.cart.getCartItems().subscribe(data =>{
     this.cartitems = data.length;
   })
     
   }
  }


