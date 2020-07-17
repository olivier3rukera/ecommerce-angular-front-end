import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserService } from './user.service';
import { environment } from '@environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = environment.baseUrl;
  constructor(private http: HttpClient, private userService: UserService) { }

  createOffer(form) {
    return this.http.post(this.url + '/products/add/', form, this.userService.getAuthHeadersFormData());
  }

  getOfferList() {
    return this.http.get(this.url + '/products/');
  }

  getOffer(uuid) {
    return this.http.get(this.url + `/products/${uuid}/`)
  }

  filterProducts(key, value) {
    let url = this.url + `/products/?${key}=${value}`
    return this.http.get(url);
  }


  searchProduct(value) {
    let url = this.url + `/products/?name=${value}`;
    return this.http.get(url);
  }

  createCart(uuid, quantity) {
    let form = {
      product: uuid,
      'quantity': quantity
    };
    return this.http.post(this.url + '/orders/add-to-cart/', form, this.userService.getAuthHeaders());
  }

  cartList() {
    return this.http.get(this.url + '/orders/user-cart/', this.userService.getAuthHeaders());
  }

  updateCart(items) {
    let form = { 'items': items };
    return this.http.post(this.url + '/orders/update-cart/', form, this.userService.getAuthHeaders());
  }

  order(form) {

    let delivery_address = {
      'city': form['city'],
      'street': form['street'],
      'avenue': form['avenue'],
      'number': form['number']
    };
    let f = { 'payment_type': 'COD' };
    let f1 = { ...f, 'delivery_address' : delivery_address, phone_number: form['phone_number'] }

    return this.http.post(this.url + '/orders/order-from-cart/', f1, this.userService.getAuthHeaders());
  }

  getAllOrders() {
    return this.http.get(this.url + '/orders/user-orders/', this.userService.getAuthHeaders());
  }

  orderSingleItem(form) {
    return this.http.post(this.url + '/orders/order-single-item/', form, this.userService.getAuthHeaders());
  }
  getOrder(uuid) {
    return this.http.get(this.url + `/orders/seller-orders/${uuid}/`);
  }
}
