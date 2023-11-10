import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { BasketListPageComponent } from './basket-list-page/basket-list-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    component: ProductListPageComponent,
  },
  {
    path: 'basket',
    component: BasketListPageComponent,
  },
  {
    path: 'products/:productid',
    component: ProductDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
