import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NavBarCart } from '../nav-bar-cart/nav-bar-cart';

@Component({
  selector: 'custom-nav-bar',
  imports: [NavBarCart],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {

  private readonly cartService = inject(CartService);
  protected readonly totalItems = this.cartService.totalItems;

  protected isCartVisible = false;

  toggleCart(): void {
    this.isCartVisible = !this.isCartVisible;
  }

}
