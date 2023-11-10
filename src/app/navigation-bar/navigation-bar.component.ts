import { Component, OnInit } from '@angular/core';
import { BasketItemsService } from '../services/basket-items.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  basketitemsnumber: number = 0;
  constructor(private basketitemservice: BasketItemsService) {}

  ngOnInit(): void {
    this.basketitemservice.shoppingbasket.subscribe((items) => {
      this.basketitemsnumber = items.reduce(
        (sum, item) => sum + item.in_basket,
        0
      );
    });
  }
}
