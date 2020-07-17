import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '@environments/environment'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http'

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { NgxLoadingModule } from 'ngx-loading'

import { UserService } from '@core/services/user.service';

import { QuillModule } from 'ngx-quill';
import { HomeComponent } from './home/home.component';



let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(environment.facebookApp, {
      scope: 'public_profile,email'
    }, 'en_US', 'name', 'v4.0')
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SocialLoginModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    QuillModule.forRoot({
      modules:
      {
        toolbar: [['bold', 'italic', 'underline'], [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }]]
      }
    }
    )
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }