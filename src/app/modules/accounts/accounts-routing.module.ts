import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.page';
import { SignUpComponent } from './pages/sign-up/sign-up.page';
const routes: Routes = [
  {
    path: 'sign/in',
    component: SignInComponent
  },
  {
    path: 'sign/up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
