import { Component,  EventEmitter,  Input, OnInit, Output  } from '@angular/core';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-grains',
  templateUrl: './grains.component.html',
  styleUrls: ['./grains.component.css']
})
export class GrainsComponent implements OnInit {

  item: any;
  cart: any;
  binding:any;
    cartitemlist: number | undefined;
  constructor(private http:CartService){}
    ngOnInit(): void {
      this.cart.cartitemlist().subscribe((res: string | any[])=>{
        this.cartitemlist =res.length;
      })
    }
  
    @Input() selectedImageSrc: string | null = null
    @Output() closeModalEvent = new EventEmitter<void>();
    //  selectedQuantity: string | null = null;
  
  
    addtocart(item: any){
      this.cart.addtocart(item);
    }
    buynow(item:any){
      // this.cart.addtocart(item);
      //post modal api using behavior subject
      this.http.addtocart({
        quantity : this.binding,
        
      })
    
    }
  }
