import { Injectable, signal } from '@angular/core';
import { Product } from '../pages/products-list/products-list.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.update(currentCart => [...currentCart, {...product}]);
  }

  removeFromCart(productId: number) {
    this.cart.update(currentCart => {
      const index = currentCart.findIndex(p => p.id === productId);
      if (index !== -1) {
        const newCart = [...currentCart];
        newCart.splice(index, 1);
        return newCart;
      }
      return currentCart;
    });
  }

  clearCart() {
    this.cart.set([]);
  }
}