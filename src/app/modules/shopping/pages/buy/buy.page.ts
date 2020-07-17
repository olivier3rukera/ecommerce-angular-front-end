import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '@core/services/products.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '@core/services/user.service';

declare var getpaidSetup;
@Component({
  selector: 'app-order',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.css']
})
export class BuyComponent implements OnInit {

  products;
  quantity;
  resolved = false;
  paymentControl = new FormControl('CARD', Validators.required);
  payment = 'CARD';
  uuid;
  loading = true;
  total = 0;
  orderForm: FormGroup;
  @Input() singleItem = false;
  constructor(private productsService: ProductsService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private user: UserService) { }

  ngOnInit() {
    this.loadScript();
    this.orderForm = this.formBuilder.group({
      'city': ['Goma', Validators.required],
      'street': ['Himbi', Validators.required],
      'avenue': ['Goma', Validators.required],
      'number': ['23', Validators.required],
      'phone_number': ['0977163790', Validators.required]
    })
    this.total = Number(this.route.snapshot.paramMap.get('t'));
    if (this.route.snapshot.paramMap.get('singleItem')) {
      this.singleItem = true;
      this.uuid = this.route.snapshot.paramMap.get('uuid');
      this.quantity = this.route.snapshot.paramMap.get('quantity');
      this.productsService.getOffer(this.uuid).subscribe(
        data => {
          this.resolved = true;
          this.loading = false;
          this.products = [];
          let product = {};
          product['unit_price'] = data['price'];
          product['quantity'] = this.quantity;
          product['product_name'] = data['name'];
          this.products.push(product);
        }
      )
    }
    else {
      this.productsService.cartList().subscribe(
        data => { this.products = data; this.loading = false; this.resolved = true; }, error => this.loading = false
      );
    }
    this.paymentControl.valueChanges.subscribe(
      data => this.payment = data
    )
  }

  order() {
    this.loading = true;
    this.productsService.order(this.orderForm.value).subscribe(
      data => { this.router.navigate(['/shopping']); this.loading = false; }, error => this.loading = false
    )
  }

  orderSingleItem() {
    this.loading = true;
    let delivery_address = this.orderForm.value;
    delete delivery_address['phone_number'];
    let form = {
      product: this.uuid,
      quantity: this.quantity,
      payment_type: this.payment,
      'delivery_address' : delivery_address, 
      'phone_number': this.orderForm.get('phone_number').value
    };
    console.log(form);
    this.productsService.orderSingleItem(form).subscribe(
      data => {
        this.router.navigate(['/shopping'
        ])
      }
    )
  }

  paymentFailure(): any {
    console.log('Payment fail');
  }

  closeRave = () => {

    console.log('closed ****');
  }

  paymentInit(): any {
    console.log('payment started');
  }
  paymentSuccess = (event) => {
    console.log('payment success', event);
    this.loading = true;
    let txref = event.tx.txRef;
    console.log('\n\n\n txt reference', txref);
  }
  payWithRave(bill) {
    let x = getpaidSetup({
      PBFPubKey: 'FLWPUBK-7f76379fa7b60f41e599ab63a55d748d-X',
      customer_email: 'user1@gmail.com',
      amount: this.total,
      currency: "USD",
      "firstname": 'olv',
      "lastname": 'rk',
      "txref": `${Date.now().toString()}`,
      meta: [{
        metaname: "flightID",
        metavalue: "AP1234"
      }],
      onclose: this.closeRave,
      callback: this.paymentSuccess
    });
  }

  public loadScript() {
    console.log('download started');
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js";
    script.async = false;
    script.defer = true;
    body.appendChild(script);
    console.log('downloaded')

  }

}
