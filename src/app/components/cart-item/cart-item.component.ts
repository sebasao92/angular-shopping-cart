import { Component, input } from '@angular/core';
import { CartItem } from '../cart-product';

@Component({
  selector: 'cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  public readonly item = input.required<CartItem>();

}
