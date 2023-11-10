import { Component } from '@angular/core';
import { Productdata, productData } from 'src/data/productdata';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css'],
})
export class ProductListPageComponent {
  productdata: Productdata[] = productData;
  categories: string[] = [
    ...new Set(productData.map((product) => product.category)),
  ];

  changeCategory(category: string) {
    category
      ? (this.productdata = productData.filter(
          (product) => product.category === category
        ))
      : (this.productdata = productData);
  }
}
