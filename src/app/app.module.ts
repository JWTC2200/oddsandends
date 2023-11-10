import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { BasketListPageComponent } from './basket-list-page/basket-list-page.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { BasketItemDetailsComponent } from './basket-item-details/basket-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProductListPageComponent,
    ProductDetailPageComponent,
    BasketListPageComponent,
    ProductListItemComponent,
    BasketItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
