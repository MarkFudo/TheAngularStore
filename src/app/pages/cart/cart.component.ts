import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="p-6 md:p-8 flex flex-col gap-6">
      <h2 class="text-2xl font-bold text-gray-100">Shopping Cart</h2>

      <div class="flex flex-col gap-4">
        @for (item of cartService.cart(); track item.id) {
          <app-cart-item [item]="item" />
        }
      </div>
      
      <app-order-summary />
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);
}