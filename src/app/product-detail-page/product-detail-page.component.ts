import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productdata, Styles, productData } from 'src/data/productdata';
import { BasketItemsService } from '../services/basket-items.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css'],
})
export class ProductDetailPageComponent implements OnInit {
  product: Productdata | undefined;
  style: Styles | undefined;
  warning: string = '';

  constructor(
    private route: ActivatedRoute,
    private basket: BasketItemsService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const routeID = Number(routeParams.get('productid'));
    this.product = productData.find((product) => product.id === routeID);
    const queryParams = this.route.snapshot.queryParamMap;
    if (queryParams.get('style')) {
      const queryStyle: Styles | undefined = this.product?.styles.find(
        (style) => style.color === queryParams.get('style')
      );
      this.style = queryStyle;
    } else {
      this.style = this.product?.styles[0];
    }
  }

  changeStyle(style: string) {
    const newstyle = this.product?.styles.find(
      (product) => product.hex_code === style
    );
    this.style = newstyle;
    if (this.style?.stock) {
      this.warning = '';
    } else {
      this.warning = 'Out of stock';
    }
  }

  buyitem() {
    if (!this.style?.stock) {
      this.warning = 'Out of stock';
    } else if (this.product && this.style) {
      this.basket.addItem({
        id: this.product.id,
        name: this.product.name,
        style: this.style,
      });
    }
  }
}
