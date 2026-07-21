import { Service } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Product } from '../components/product';

@Service()
export class ProductService {

  private readonly API_URL = 'https://fakestoreapi.com/products';
  
  productsResource = httpResource<Product[]>(() => this.API_URL);
}
