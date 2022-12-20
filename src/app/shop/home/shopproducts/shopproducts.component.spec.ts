import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopproductsComponent } from './shopproducts.component';

describe('ShopproductsComponent', () => {
  let component: ShopproductsComponent;
  let fixture: ComponentFixture<ShopproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
