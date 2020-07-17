import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  loading = true;
  offers;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    
  }

}
