import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchControl = new FormControl('', Validators.required);
  loading = false;
  products;
  empty = true;
  searchKey;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  search() {
    this.loading = true;
    this.searchKey = this.searchControl.value;
    this.productService.searchProduct(this.searchControl.value).subscribe(
      data => {
        this.loading = false;
        this.products = data;
        if (this.products.length > 0) {
          this.empty = false
        }
      }, error => this.loading = false
    )
  }

}
