import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShortOverviewComponent } from './product-short-overview.component';

describe('ProductShortOverviewComponent', () => {
  let component: ProductShortOverviewComponent;
  let fixture: ComponentFixture<ProductShortOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShortOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShortOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
