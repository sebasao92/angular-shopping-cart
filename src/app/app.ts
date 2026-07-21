import { Component } from '@angular/core';
import { ProductList } from "./components/product-list/product-list";
import { NavBar } from "./components/nav-bar/nav-bar";
import { NavBarCart } from "./components/nav-bar-cart/nav-bar-cart";

@Component({
  selector: 'app-root',
  imports: [ProductList, NavBar, NavBarCart],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {



}

