import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {

  protected readonly searchText = signal('');
  protected readonly searchTerm = output<string>();

  protected onSearchChange(value: string): void {
    this.searchText.set(value);
    this.searchTerm.emit(value);
  }

}
