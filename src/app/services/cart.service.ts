import { computed, Service, signal } from '@angular/core';
import { Product } from '../components/product';
import { CartItem } from '../components/cart-product';

@Service()
export class CartService {

    private readonly _cart = signal<CartItem[]>([]);
    readonly cartItems = this._cart.asReadonly();
    readonly totalItems = computed(() => this._cart().reduce((total, item) => total + item.quantity, 0));
    readonly totalPrice = computed(() => this.cartItems().reduce((total, item) => total + (item.product?.price || 0) * item.quantity, 0));

    addProduct(product: Product): void {
        this._cart.update((items) => {
            const existingItemIndex = items.findIndex(item => item.product.id === product.id);

            if (existingItemIndex > -1) {
                const updatedItems = [...items];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1
                };
                return updatedItems;
            }

            return [...items, { product, quantity: 1 }];
        });
    }

    removeItem(itemToRemove: CartItem): void {
        this._cart.update((items) => {
            const existingItemIndex = items.findIndex(item => item.product.id === itemToRemove.product.id);

            if (existingItemIndex > -1) {
                const updatedItems = [...items];
                updatedItems.splice(existingItemIndex, 1);
                return updatedItems;
            }

            return items;
        });
    }
}
