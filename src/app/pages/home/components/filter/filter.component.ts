import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, MatListModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes', 'sports'];

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
