import { Component, inject, input } from '@angular/core';
import { Product } from '../products-list.component';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="h-full bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col gap-6 relative hover:shadow-lg hover:shadow-blue-900/20 transition-shadow">
      <div class="mx-auto min-h-[100px] flex items-center">
        <img [src]="product().image" class="w-[200px] max-h-[100px] object-contain" />
      </div>
      <div class="flex flex-col flex-grow">
        <span class="text-md font-bold line-clamp-2">{{ product().title }}</span>
        <span class="text-blue-300 text-sm mt-1">{{ '$' + product().price }}</span>
        <div class="mt-auto pt-3">
          <app-primary-button
            (btnClicked)="cartService.addToCart(product())"
            class="w-full"
            label="Add to Cart"
            [disabled]="isOutOfStock()"
          />
        </div>
      </div>

      <span class="absolute top-2 right-3 text-sm font-bold"
        [class]="isOutOfStock() ? 'text-red-400' : 'text-green-300'">
        {{ getStockMessage() }}
      </span>
    </div>
  `,
  styles: []
})
export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();

  isOutOfStock(): boolean {
    return typeof this.product().stock === 'number' && this.product().stock === 0;
  }

  getStockMessage(): string {
    if (this.isOutOfStock()) {
      return 'Out of stock';
    }
    return typeof this.product().stock === 'number' 
      ? `${this.product().stock} left` 
      : 'In stock';
  }
}