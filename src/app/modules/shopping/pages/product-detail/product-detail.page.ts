import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductsService } from '@core/services/products.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '@core/services/user.service';
import { switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-offer-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.css']
})
export class ProductDetailComponent implements OnInit {

  public uuid: string;
  offer;
  proposalForm: FormGroup;
  loading = true;
  offerResolved = false;
  relatedResolved = false;
  offers;
  category;
  // check if user can send proposal
  canSendProposal: any = false;
  quantityFormControl = new FormControl('1', Validators.required);
  total = 0;

  // have we get the user permission?
  permissionResolved = false;
  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsService, public formBuilder: FormBuilder,
    public user: UserService) { }

  ngOnInit() {
    /*this.route.paramMap.pipe(switchMap((params: ParamMap) =>
      this.uuid = params.get('uuid')
    )).subscribe(() => {
      this.loading = true;
      this.productsService.getOffer(this.uuid).subscribe(
        data => {
          this.offer = data;
          this.loading = false;
          this.offerResolved = true;
          this.category = data['category'];
          this.loadRelatedProducts();

          this.quantityFormControl.setValue(2);
          this.quantityFormControl.setValue(1);
        }, error => {
          this.loading = false;
        }
      );
    }
    )*/
    this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      this.uuid = params.get('uuid');
      this.loading = true;
      return this.productsService.getOffer(this.uuid);
    }
    )).subscribe((data) => {
      this.offer = data;
      this.loading = false;
      this.offerResolved = true;
      this.category = data['category_name'];
      this.loadRelatedProducts();
      this.quantityFormControl.setValue(2);
      this.quantityFormControl.setValue(1);
    }, error => this.loading = false
    )

    this.quantityFormControl.valueChanges.subscribe(
      data => { this.total = Number(data) * this.offer.price; }
    )



    this.proposalForm = this.formBuilder.group(
      {
        'price': ['', Validators.required],
        'offer': [this.uuid, Validators.required]
      }
    )
  }

  // send proposal
  addToCart() {
    this.loading = true;
    this.productsService.createCart(this.offer.uuid, this.quantityFormControl.value).subscribe(
      data => {
        this.loading = false;
        this.router.navigate(['/shopping/mon-panier']);
      }, error => { console.log(error.error); this.loading = false; }
    )
  }

  loadRelatedProducts() {
    this.productsService.filterProducts('category', this.category).subscribe(
      data => { this.offers = data; this.relatedResolved = true; }
    )
  }
}