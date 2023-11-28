import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  constructor(private http:HttpClient) { }
  public cartitemlist :any=[]
  cartItems = new BehaviorSubject<any>("")

  addtocart(item: any) {
    this.cartitemlist.push(item);
    this.cartitemlist.next(this.cartitemlist);
  }
  buynow(item: any) {
    this.cartitemlist.push(item);
    this.cartitemlist.next(item);
  }

  getCartItems() {
    return this.cartItems.asObservable();
  }

//   calculateTotalPrice() {
//     return this.cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   }
// }

// export interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: string;
// }
}
export interface CartItem {
  imageSrc: string;
  quantity: string;

}
