import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  total = 0;
  @Input() products;
  constructor() { }

  ngOnInit() {
    console.log(this.products)
    for (let product of this.products) {
      this.total = this.total + (product['quantity'] * product['unit_price']);
    }
  }
}
