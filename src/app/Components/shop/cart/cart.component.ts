import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Cart } from 'src/app/Shared/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Cart[] = [];

  paytmApiUrl='https://paytm.com/rent-payment';

  constructor(private shoppingService:UserServiceService) {
    this.cartItems = this.shoppingService.getCartItems();
  }

  removeFromCart(cartItem: Cart): void {
    this.shoppingService.removeFromCart(cartItem);
  }

  calculateTotal(): number {
    return this.cartItems.reduce(
      (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
      0
    );
  }

}
