import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decreCount,
  increCount,
  removeFromCart,
} from 'src/app/cart-Store/cart.action';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  cartProducts: any;
  totalPrice: number=0;

  constructor(private store: Store<{ cart: { cart: any } }>) {
    this.store.select('cart').subscribe((data) => {
      this.cartProducts = data.cart;
      for (let a = 0; a < this.cartProducts.length; a++) {
        console.log(typeof this.cartProducts[a].price);
        this.totalPrice += (
          this.cartProducts[a].count * this.cartProducts[a].price
        );
      }
      console.log(this.totalPrice);
    });
  }
  ngOnInit(): void {}

  increseProductCount(product: any) {
    this.store.dispatch(increCount({ product: product }));
  }

  decreseProductCount(product: any) {
    this.store.dispatch(decreCount({ product: product }));
  }

  removeFromCart(product: any) {
    this.store.dispatch(removeFromCart({ product: product }));
  }
}
