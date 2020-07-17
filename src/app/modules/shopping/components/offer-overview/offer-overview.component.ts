import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-offer-overview',
  templateUrl: './offer-overview.component.html',
  styleUrls: ['./offer-overview.component.css']
})
export class OfferOverviewComponent implements OnInit {

  @Input() offer;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    
  }

}
