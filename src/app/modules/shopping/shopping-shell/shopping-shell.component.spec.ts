import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersShellComponent } from './offers-shell.component';

describe('OffersShellComponent', () => {
  let component: OffersShellComponent;
  let fixture: ComponentFixture<OffersShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
