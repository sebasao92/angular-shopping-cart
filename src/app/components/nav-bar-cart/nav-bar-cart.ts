import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { DecimalPipe } from '@angular/common';
import { CartItem } from '../cart-product';

@Component({
  selector: 'nav-bar-cart',
  imports: [CartItemComponent, DecimalPipe],
  templateUrl: './nav-bar-cart.html',
  styleUrls: ['./nav-bar-cart.scss'],
})
export class NavBarCart {

  private readonly cartService = inject(CartService);

  protected readonly cartItems = this.cartService.cartItems;
  protected readonly totalPrice = this.cartService.totalPrice;

  removeItem(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem);
  }

}
