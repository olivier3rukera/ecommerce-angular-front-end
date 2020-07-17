import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.page.html',
  styleUrls: ['./user-orders.page.css']
})
export class UserOrdersComponent implements OnInit {

  orders: any = [];
  loading = true;
  empty = true;


  constructor(private productsService: ProductsService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.productsService.getAllOrders().subscribe(
      data => {
        this.orders = data; this.loading = false;
        if (this.orders.length > 0) {
          this.empty = false;
        }
      }
    )
  }

}
