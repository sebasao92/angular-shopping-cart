import { Component, computed, inject, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'product-list',
  imports: [ProductCard, SearchBar],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  private readonly productService: ProductService = inject(ProductService);

  public readonly products = computed(() => this.productService.productsResource.value() ?? []);
  protected readonly filteredProducts = computed(() => this.products().filter(
    product => product.title.toLowerCase().includes(this.searchTerm().toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchTerm().toLowerCase())));
  protected readonly searchTerm = signal('');

  onSearch(searchTerm: string): void {
    this.searchTerm.set(searchTerm);
  }

}
