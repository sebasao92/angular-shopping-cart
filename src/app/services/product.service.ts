import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, httpResource } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../components/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private readonly API_URL = 'https://fakestoreapi.com/products';
  
  productsResource = httpResource<Product[]>(() => this.API_URL);
}