import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item;
  @Output() quantityChanged = new EventEmitter<any>();
  quantityControl = new FormControl('1');
  itemCopy;
  constructor() { }

  ngOnInit() {
    this.itemCopy = { ...this.item };
    this.quantityControl.setValue(this.item.quantity);
    this.quantityControl.valueChanges.subscribe(
      data => {
        this.itemCopy['quantity'] = data;
        this.quantityChanged.emit(this.itemCopy);
      }
    )
  }

  editQuantity() {
  }

}
