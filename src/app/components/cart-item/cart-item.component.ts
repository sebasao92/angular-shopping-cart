import { Component, inject, input, output } from '@angular/core';
import { CartItem } from '../cart-product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  readonly item = input.required<CartItem>();
  readonly removeItem = output<CartItem>();

}
