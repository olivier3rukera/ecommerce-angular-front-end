import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-bill',
  templateUrl: './order-bill.component.html',
  styleUrls: ['./order-bill.component.css']
})
export class OrderBillComponent implements OnInit {

  total = 0;
  @Input() products;
  constructor() { }

  ngOnInit() {
    console.log(this.products)
    for (let product of this.products) {
      this.total = this.total + (product['quantity'] * product['price']);
    }
  }
}
