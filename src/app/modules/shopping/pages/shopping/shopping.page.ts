import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-offers',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.css']
})
export class ShoppingComponent implements OnInit {

  offers;
  epices;
  loading = true;
  fruits;
  legumes;
  viandes;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getOfferList().subscribe(
      data => { this.offers = data; this.loading = false; }, error => {
        this.loading = false;
      }
    );

    this.productsService.filterProducts('category', 'Viandes').subscribe(
      data => this.viandes = data
    )
    this.productsService.filterProducts('category', 'Legumes').subscribe(
      data => this.legumes = data
    )
    this.productsService.filterProducts('category', 'Fruits').subscribe(
      data => this.fruits = data
    )
    this.productsService.filterProducts('category', 'Epices').subscribe(
      data => this.epices = data
    )
  }

}
