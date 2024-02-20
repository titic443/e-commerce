import { Component } from '@angular/core';
import { Cart, CartItem } from '../../../../models/cart.model';
import { MatCard } from '@angular/material/card';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatCard,
    CommonModule,
    MatButton,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'sneakers',
        price: 150,
        quatity: 3,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'sneakers',
        price: 150,
        quatity: 1,
        id: 1,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quatity',
    'total',
    'action',
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quatity)
      .reduce((prev, current) => prev + current, 0);
  }
}
