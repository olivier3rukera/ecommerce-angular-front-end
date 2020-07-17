import { Component, OnInit } from '@angular/core';
import { ProductsService} from '@core/services/products.service';

@Component({
  selector: 'app-my-offers',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.css']
})
export class CartComponent implements OnInit {

  products: any = [];
  productsCopy;
  total = 0;
  loading = true;
  empty = true;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.cartList().subscribe(
      data => {

        this.loading = false;
        this.products = data; this.productsCopy = this.products.slice();
        if (this.products.length > 0) {
          this.empty = false;
        }
        for (let product of this.products) {
          this.total = this.total + (product['quantity'] * product['unit_price']);
        }
      }, error => this.loading = false
    )
  }

  onQuantityChanged(event) {
    let index = this.productsCopy.map(el => el.product).indexOf(event.product);
    this.productsCopy[index] = event;
  }

  updateCart() {
    this.loading = true;
    this.productsService.updateCart(this.productsCopy).subscribe(
      data => {
        this.products = data; this.loading = false;
        if (this.products.length > 0) {
          this.empty = false;
        }

        this.total = 0;

        for (let product of this.products) {
          this.total = this.total + (product['quantity'] * product['unit_price']);
        }
      }, error => { this.loading = false; }
    )
  }

}