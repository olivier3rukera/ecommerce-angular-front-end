import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./modules/accounts/accounts.module').then(
      mod => mod.AccountsModule
    )
  },
  {
    path: 'shopping',
    loadChildren: () => import('./modules/shopping/shopping.module').then(
      mod => mod.ShoppingModule
    )
  }, 
  {
    path: '',
    redirectTo : 'shopping',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
