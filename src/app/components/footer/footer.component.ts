import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 py-4 border-t border-gray-700">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-center text-center">
        <div class="order-2 md:order-1 mt-2 md:mt-0">
          <p class="text-sm">&copy; Freivel Hirujo, 2025.</p>
        </div>
        <div class="order-1 md:order-2">
          <a 
            href="https://www.linkedin.com/in/freivelhirujo/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-2 hover:underline text-blue-400"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}