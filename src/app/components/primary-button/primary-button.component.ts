import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  template: `
    <button
      [class]="disabled() ? 
        'bg-gray-700 text-gray-400 cursor-not-allowed' : 
        'bg-blue-600 hover:bg-blue-700 text-white'"
      [attr.disabled]="disabled() ? '' : null"
      (click)="!disabled() && btnClicked.emit()"
      class="px-4 py-2 rounded-lg w-full font-medium transition-colors"
    >
      {{ label() }}
    </button>
  `,
  styles: []
})
export class PrimaryButtonComponent {
  label = input<string>('');
  disabled = input<boolean>(false);
  btnClicked = output();
}