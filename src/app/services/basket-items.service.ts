import { Injectable } from '@angular/core';
import { Basketitems, Basketdata } from 'src/data/productdata';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasketItemsService {
  private basketitems: Basketitems[] = [];
  public shoppingbasket: BehaviorSubject<Basketitems[]> = new BehaviorSubject<
    Basketitems[]
  >([]);

  addItem(product: Basketdata): void {
    const basketIndex = this.basketitems.findIndex(
      (item) =>
        item.id === product.id && item.style.color === product.style.color
    );
    if (basketIndex !== -1) {
      this.basketitems[basketIndex] = {
        ...this.basketitems[basketIndex],
        in_basket: this.basketitems[basketIndex].in_basket + 1,
      };
    } else {
      this.basketitems.push({ ...product, in_basket: 1 });
    }
    this.shoppingbasket.next(this.basketitems);
  }

  removeItem(product: Basketitems): void {
    const basketIndex = this.basketitems.findIndex(
      (item) =>
        item.id === product.id && item.style.color === product.style.color
    );
    if (this.basketitems[basketIndex].in_basket > 1) {
      this.basketitems[basketIndex] = {
        ...this.basketitems[basketIndex],
        in_basket: this.basketitems[basketIndex].in_basket - 1,
      };
    } else {
      const filteredBasket = this.basketitems.filter(
        (item, index) => index !== basketIndex
      );
      this.basketitems = filteredBasket;
    }
    this.shoppingbasket.next(this.basketitems);
  }

  constructor() {}
}
