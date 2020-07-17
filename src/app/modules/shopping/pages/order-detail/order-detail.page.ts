import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@core/services/products.service';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.css']
})
export class OrderDetailComponent implements OnInit {

  products;
  uuid;
  loading = true;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.uuid = this.route.snapshot.paramMap.get('uuid');
    this.productsService.getOrder(this.uuid).subscribe(
      data => { this.products = data; this.loading = false; },
      error => this.loading = false
    )
  }

}
