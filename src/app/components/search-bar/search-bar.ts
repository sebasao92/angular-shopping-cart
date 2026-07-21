import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'product-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {

  protected readonly searchTerm = output<string>();

  // NgModel also works, but this is a simple component and we don't need to import FormsModule for this.
  protected onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm.emit(inputElement.value);
  }

}
