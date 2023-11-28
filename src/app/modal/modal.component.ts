// import { Component,  Input  } from '@angular/core';

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.css']
// })
// export class ModalComponent {
//   @Input() selectedImageSrc: string | null = null;
  

//   closeModal() {
//     this.selectedImageSrc = null;
    
   
// }
// }



// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.css']
// })
// export class ModalComponent {
//   @Input() selectedImageSrc: string | null = null;
//   showModal = true; 

//   closeModal() {
//     this.showModal = false; 
//   }
// }








import { Component,  EventEmitter,  Input, OnInit, Output  } from '@angular/core';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

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

  // selectedQuantity: number = 1;

  // handleQuantityChange(quantity: number) {
  //   this.selectedQuantity = quantity;
  // }

}





