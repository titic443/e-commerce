import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatCard, CommonModule, MatIcon],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
}
