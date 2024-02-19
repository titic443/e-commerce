import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { CartComponent } from './components/cart/cart.component';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 355, 4: 350 };
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    ProductHeaderComponent,
    FilterComponent,
    MatGridList,
    MatGridTile,
    ProductBoxComponent,
    CartComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(category: string): void {
    this.category = category;
  }
}
