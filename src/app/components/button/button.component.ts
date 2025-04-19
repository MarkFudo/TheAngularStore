import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      [class]="getButtonClasses()"
      (click)="btnClicked.emit()"
    >
      <span class="text-md">{{ label() }}</span>
    </button>
  `,
  styles: []
})
export class ButtonComponent {
  label = input<string>('');
  variant = input<'primary' | 'danger'>('primary');
  btnClicked = output();

  getButtonClasses() {
    const base = 'px-4 py-2 rounded-lg font-medium transition-colors';
    
    if (this.variant() === 'danger') {
      return `${base} bg-red-600/20 text-red-300 hover:bg-red-600/30 border border-red-600/30`;
    }
    
    return `${base} bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-600/30`;
  }
}