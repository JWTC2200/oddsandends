import { Component, OnInit } from '@angular/core';
import { BasketItemsService } from '../services/basket-items.service';
import { Basketdata, Basketitems } from 'src/data/productdata';

@Component({
  selector: 'app-basket-list-page',
  templateUrl: './basket-list-page.component.html',
  styleUrls: ['./basket-list-page.component.css'],
})
export class BasketListPageComponent implements OnInit {
  basketitems!: Basketitems[];
  basketvalue: number = 0;

  constructor(private basket: BasketItemsService) {}

  ngOnInit(): void {
    this.basket.shoppingbasket.subscribe((items) => {
      this.basketitems = items;
      this.basketvalue = items.reduce(
        (sum, item) => sum + item.style.price * item.in_basket,
        0
      );
    });
  }
}
