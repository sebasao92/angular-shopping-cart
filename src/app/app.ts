import { Component } from '@angular/core';
import { ProductList } from "./components/product-list/product-list";
import { NavBar } from "./components/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [ProductList, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {



}

