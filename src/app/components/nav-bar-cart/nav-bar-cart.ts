import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'nav-bar-cart',
  imports: [CartItemComponent],
  templateUrl: './nav-bar-cart.html',
  styleUrl: './nav-bar-cart.scss',
})
export class NavBarCart {

  private readonly cartService = inject(CartService);

  protected readonly cartItems = this.cartService.cartItems;
}
