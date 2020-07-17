import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module'

import { AccountsRoutingModule } from './accounts-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.page';
import { SignUpComponent } from './pages/sign-up/sign-up.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AccountsModule { }
