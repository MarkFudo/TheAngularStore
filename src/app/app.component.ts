import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <app-header />
      <main class="flex-grow p-4 md:p-8">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: []
})
export class AppComponent {}