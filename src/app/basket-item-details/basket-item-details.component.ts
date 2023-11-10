import { Component, Input, OnInit } from '@angular/core';
import { Basketitems } from 'src/data/productdata';
import { BasketItemsService } from '../services/basket-items.service';

@Component({
  selector: 'app-basket-item-details',
  templateUrl: './basket-item-details.component.html',
  styleUrls: ['./basket-item-details.component.css'],
})
export class BasketItemDetailsComponent {
  @Input() product!: Basketitems;

  constructor(private basketitemservice: BasketItemsService) {}

  removeItem(product: Basketitems) {
    this.basketitemservice.removeItem(product);
  }
}
