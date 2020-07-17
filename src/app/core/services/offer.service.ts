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

  createProposal(proposal) {
    return this.http.post(this.url + `/offers/proposal/create/`, proposal, this.userService.getAuthHeaders())
  }

  getUserOffers() {
    return this.http.get(this.url + '/offers/my-offers/', this.userService.getAuthHeaders())
  }

  getOfferProposals(uuid) {
    return this.http.get(this.url + `/offers/${uuid}/proposals/`, this.userService.getAuthHeaders());
  }

  getUserProposals() {
    return this.http.get(this.url + `/offers/proposals/`, this.userService.getAuthHeaders())
  }

  getProposalComments(uuid) {
    return this.http.get(this.url + `/offers/proposals/${uuid}/comments/`);
  }

  createComment(form) {
    return this.http.post(this.url + '/offers/comments/create/', form, this.userService.getAuthHeaders())
  }

  likeOffer(uuid) {
    return this.http.get(this.url + `/offers/${uuid}/like/`, this.userService.getAuthHeaders())
  }
  dislikeOffer(uuid) {
    return this.http.get(this.url + `/offers/${uuid}/dislike/`, this.userService.getAuthHeaders())
  }

  offerStats(uuid) {
    return this.http.get(this.url + `/offers/${uuid}/stats/`)
  }

  checkCanSendProposal(uuid) {

    return this.http.get(this.url + `/offers/${uuid}/can-send-proposal/`, this.userService.getAuthHeaders())
  }

  filterOffers(search) {
    let url = this.url + `/offers/filter/?`
    if (search['title']) {
      url = url + `title=${search.title}`;
    }
    if (search['location']) {
      url = url + `&location=${search.location}`
    }
    return this.http.get(url);
  }

  createCart(uuid, quantity) {
    let form = {
      product: uuid,
      'quantity': quantity
    };
    return this.http.post(this.url + '/offers/add-to-cart/', form, this.userService.getAuthHeaders());
  }

  cartList() {
    return this.http.get(this.url + '/offers/user-cart/', this.userService.getAuthHeaders());
  }

  updateCart(items) {
    let form = { 'items': items };
    return this.http.post(this.url + '/offers/update-cart/', form, this.userService.getAuthHeaders());
  }

  order(){
    let form = {'payment_type' : 'COD'};

    return this.http.post(this.url + '/offers/order-from-cart/',form, this.userService.getAuthHeaders());
  }

  getAllOrders(){
    return this.http.get(this.url + '/offers/user-orders/', this.userService.getAuthHeaders());
  }

  orderSingleItem(form){
    return this.http.post(this.url + '/offers/order-single-item/', form, this.userService.getAuthHeaders());
  }
}
