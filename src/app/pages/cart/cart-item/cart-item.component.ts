import { Component, inject, input } from '@angular/core';
import { Product } from '../../products-list/products-list.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="bg-gray-800 shadow-md border border-gray-700 rounded-xl p-4 md:p-6 flex gap-4 items-center hover:shadow-blue-900/10 transition-shadow">
      <img 
        [src]="item().image" 
        class="w-[50px] h-[50px] object-contain" 
        alt="Product image"
      />
      <div class="flex flex-col flex-grow">
        <span class="text-md font-bold text-gray-100">{{ item().title }}</span>
        <span class="text-sm text-blue-300">{{ '$' + item().price }}</span>
      </div>
      <app-button
        label="Remove"
        variant="danger"
        (btnClicked)="removeItem()"
        class="min-w-[100px]"
      />
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  item = input.required<Product>();
  cartService = inject(CartService);

  removeItem() {
    this.cartService.removeFromCart(this.item().id);
  }
}