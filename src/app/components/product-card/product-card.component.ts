import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCard {

  private readonly cartService = inject(CartService);

  public readonly product = input.required<Product>();

  onAddToCart(product: Product): void {
    this.cartService.addProduct(product);
  }
}