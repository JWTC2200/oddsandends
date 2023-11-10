import { Component, Input } from '@angular/core';
import { Productdata } from 'src/data/productdata';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent {
  @Input() product!: Productdata;
}
