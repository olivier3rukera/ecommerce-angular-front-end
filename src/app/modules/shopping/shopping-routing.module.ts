import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './components/chat/chat.component';

import { ProductDetailComponent } from './pages/product-detail/product-detail.page';
import { BuyComponent } from './pages/buy/buy.page';
import { UserOrdersComponent } from './pages/user-orders/user-orders.page';
import { CartComponent } from './pages/cart/cart.page';
import { ShoppingComponent } from './pages/shopping/shopping.page';
import { FilterProductsComponent } from './pages/filter-products/filter-products.page';
import { CategoriesComponent } from './pages/categories/categories.page';
import { ShoppingShellComponent } from './shopping-shell/shopping-shell.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.page';
import { SearchComponent } from './pages/search/search.component';
const routes: Routes = [
  {
    path: '',
    component: ShoppingShellComponent,
    children: [{
      path: 'commandes/:uuid',
      component: OrderDetailComponent
    },
    {
      path: 'categories',
      component: CategoriesComponent
    },
    {
      path: 'detail/:uuid',
      component: ProductDetailComponent
    },
    {
      path: 'filter',
      component: FilterProductsComponent
    },
    {
      path: 'mon-panier',
      component: CartComponent
    }, {
      path: 'payer',
      component: BuyComponent
    },
    {
      path: 'my-offers/c/:uuid',
      component: ChatComponent
    }, {
      path: 'commandes',
      component: UserOrdersComponent
    },
    {
      path: 'search',
      component: SearchComponent
    },
    {
      path: '',
      component: ShoppingComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }