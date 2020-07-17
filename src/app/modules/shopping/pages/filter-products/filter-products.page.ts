import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.page.html',
  styleUrls: ['./filter-products.page.css']
})
export class FilterProductsComponent implements OnInit {

  filter;
  products: any = [];
  loading = true;
  empty = true;
  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('name')) {
      this.filter = this.route.snapshot.paramMap.get('name');
      this.productsService.filterProducts('name', this.filter).subscribe(
        data => {
          this.products = data; this.loading = false;
          if (this.products.length > 0) {
            this.empty = false;
          }
        }
      )
    }
    else if (this.route.snapshot.paramMap.get('category')) {
      this.filter = this.route.snapshot.paramMap.get('category');
      this.productsService.filterProducts('category', this.filter).subscribe(
        data => {
          this.products = data;
          this.loading = false;
          if (this.products.length > 0) {
            this.empty = false;
          }
        }
      )
    }
  }

}
