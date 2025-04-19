import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
      <h2 class="text-2xl font-semibold text-gray-100 mb-4">Order Summary</h2>
      <div class="flex flex-col gap-6">
        <div class="flex justify-between items-center">
          <span class="text-lg text-gray-300">Items</span>
          <span class="text-lg font-bold text-blue-300">{{ itemCount() }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-lg text-gray-300">Total</span>
          <span class="text-lg font-bold text-blue-300">{{ '$' + total() }}</span>
        </div>
        <app-primary-button 
          label="Proceed to checkout" 
          class="w-full"
        />
      </div>
    </div>
  `,
  styles: ``
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  itemCount = computed(() => this.cartService.cart().length);

  total = computed(() => {
    return this.cartService.cart().reduce((sum, item) => sum + item.price, 0);
  });
}