import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  @Input() offer;
  constructor() { }

  ngOnInit() {
  }

}