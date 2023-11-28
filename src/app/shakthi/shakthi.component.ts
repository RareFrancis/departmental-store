import { Component } from '@angular/core';
import { CartItem, CartService } from '../cart.service';



@Component({
  selector: 'app-shakthi',
  templateUrl: './shakthi.component.html',
  styleUrls: ['./shakthi.component.css']
})
export class ShakthiComponent {
  currentImageIndex = -1;
  maxImages = 15; // Update this with the total number of images

  // selectedImageSrc: string | null = null;
  constructor(private cartService: CartService) {}



  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.maxImages) % this.maxImages;
    this.updateRotation();
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.maxImages;
    this.updateRotation();
  }

  updateRotation() {
    const box = document.querySelector('.box') as HTMLElement;
    box.style.transform = `perspective(1000px) rotateY(${this.currentImageIndex * (360 / this.maxImages)}deg)`;
  }

  // openModal() {
  
  //   // this.modalService.isModalOpen = false;
    
  // }



  // In OilComponent
selectedImageSrc: string | null = null;

openModal(imageSrc: string) {
  this.selectedImageSrc = imageSrc;
  const modal = document.querySelector('.modal') as HTMLElement;
  modal.style.display = 'block';
}

closeModal() {
  this.selectedImageSrc ;
  const modal = document.querySelector('.modal') as HTMLElement;
  modal.style.display = 'none';
}




// addToCart(imageSrc: string, quantity: string) {
//   // Extract the name and price based on the image source, or use your logic.
//   const itemName = 'Item Name';
//   const itemPrice = 10; // Adjust the price accordingly.

//   const cartItem: CartItem = {
//     id: Date.now(), // Use a unique ID (e.g., timestamp) for the item.
//     name: itemName,
//     price: itemPrice,
//     quantity: quantity,
//   };

//   this.cartService.addToCart(cartItem);
// }


// addToCart(quantity: string) {
//   if (this.selectedImageSrc) {
//     const newItem: CartItem = {
//       imageSrc: this.selectedImageSrc,
//       quantity: quantity,
//     };
//     this.cartService.addToCart(newItem);
//   }
// }


}
