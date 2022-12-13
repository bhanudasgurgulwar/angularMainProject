import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleproductDetailsComponent } from './singleproduct-details.component';

describe('SingleproductDetailsComponent', () => {
  let component: SingleproductDetailsComponent;
  let fixture: ComponentFixture<SingleproductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleproductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleproductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
