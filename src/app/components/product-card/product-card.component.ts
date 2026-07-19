import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'] // Lo dejas por si necesitas CSS personalizado
})
export class ProductCard {
  // Recibe el producto usando Signal Inputs de forma obligatoria
  public product = input.required<Product>();

  // Output moderno basado en la nueva API de Angular
  public onAddToCart = output<Product>();
}