import { Component, OnInit,Input } from '@angular/core';
import {ProductsService} from '@core/services/products.service'

@Component({
  selector: 'app-product-short-overview',
  templateUrl: './product-short-overview.component.html',
  styleUrls: ['./product-short-overview.component.css']
})
export class ProductShortOverviewComponent implements OnInit {

  @Input() offer;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    
  }

}
