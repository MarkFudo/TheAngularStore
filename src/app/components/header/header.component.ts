import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <header class="bg-gray-800 shadow-lg p-4">
      <div class="container mx-auto flex justify-between items-center">
        <a routerLink="/" class="text-xl font-bold hover:text-blue-400">The Angular Store</a>
        
        <div class="flex items-center gap-4">
          <nav>
            <ul class="flex space-x-4">
              <li><a routerLink="/" class="hover:text-blue-400">Products</a></li>
            </ul>
          </nav>
          
          <app-primary-button 
            [label]="cartLabel()" 
            routerLink="/cart"
            class="ml-4"
          />
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  cartService = inject(CartService);

  cartLabel = computed(() => {
    const count = this.cartService.cart().length;
    return count > 0 ? `Cart (${count})` : 'Cart';
  });
}