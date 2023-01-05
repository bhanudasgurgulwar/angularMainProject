import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToBuyNow,
  clearCart,
  decreCount,
  increCount,
  removeFromCart,
  sumUpTotalAmount,
} from 'src/app/cart-Store/cart.action';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  cartProducts: any;
  totalPrice: number = 0;

  constructor(private store: Store<{ cart: { cart: any; totalAmount: any } }>) {
    this.store.select('cart').subscribe((data) => {
      this.cartProducts = data.cart;
      this.totalPrice = data.totalAmount;
    });
  }
  ngOnInit(): void {
    this.store.dispatch(sumUpTotalAmount());
  }

  increseProductCount(product: any) {
    this.store.dispatch(increCount({ product: product }));
    this.store.dispatch(sumUpTotalAmount());
  }

  decreseProductCount(product: any) {
    this.store.dispatch(decreCount({ product: product }));
    this.store.dispatch(sumUpTotalAmount());
  }

  removeFromCart(product: any) {
    this.store.dispatch(removeFromCart({ product: product }));
  }

  emptyCart() {
    alert('your cart will get empty');
    this.store.dispatch(clearCart());
  }

  addItemsToBuyNow() {
    this.store.dispatch(addToBuyNow())
  }
}
