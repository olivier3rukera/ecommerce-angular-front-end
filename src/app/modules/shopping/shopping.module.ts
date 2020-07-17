import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms'

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module'
import { OfferOverviewComponent } from './components/offer-overview/offer-overview.component';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProductShortOverviewComponent } from './components/product-short-overview/product-short-overview.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { BillComponent } from './components/bill/bill.component';
import { ShoppingComponent } from './pages/shopping/shopping.page';
import { ProductDetailComponent } from './pages/product-detail/product-detail.page';
import { UserOrdersComponent } from './pages/user-orders/user-orders.page';
import { BuyComponent } from './pages/buy/buy.page';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { CartComponent } from './pages/cart/cart.page';
import { FilterProductsComponent } from './pages/filter-products/filter-products.page';
import { CategoriesComponent } from './pages/categories/categories.page';
import { ShoppingShellComponent } from './shopping-shell/shopping-shell.component';
import { OrderBillComponent } from './components/order-bill/order-bill.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.page';
import { QuillModule } from 'ngx-quill';
import { SearchComponent } from './pages/search/search.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';

@NgModule({
  declarations: [ShoppingShellComponent,
    ShoppingComponent,
    ProductDetailComponent,
    OfferOverviewComponent,
    UserOrdersComponent,
    OfferListComponent,
    BuyComponent,
    ChatComponent,
    ProductShortOverviewComponent,
    CartItemComponent,
    CartComponent,
    BillComponent,
    FilterProductsComponent, OrderBillComponent,OrderDetailComponent,
    CategoriesComponent,
    SearchComponent,
    ProductOverviewComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,QuillModule
  ]
})
export class ShoppingModule { }