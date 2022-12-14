import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCheckoutComponent } from './orders-checkout.component';

describe('OrdersCheckoutComponent', () => {
  let component: OrdersCheckoutComponent;
  let fixture: ComponentFixture<OrdersCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
