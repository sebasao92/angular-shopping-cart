import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'custom-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {

  private readonly cartService = inject(CartService);

  totalItems(): number {
    return this.cartService.totalItems();
  }

}
