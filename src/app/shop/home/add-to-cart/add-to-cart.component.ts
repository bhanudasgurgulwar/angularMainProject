import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromCart } from 'src/app/cart-Store/cart.action';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  cartProducts: any;

  constructor(private store: Store<{ cart: { cart: any } }>) {
    this.store.select('cart').subscribe((data) => {
      this.cartProducts = data.cart;
      // /JSON.parse(JSON.stringify(data.cart));
      console.log(this.cartProducts);
    });
  }
  ngOnInit(): void {}

  increseProductCount(productCount: number) {
    console.log(productCount);

  }

  decreseProductCount(productCount: number) {
    console.log(productCount);
  }

  removeFromCart(product:any){
    // console.log(/);
    this.store.dispatch(removeFromCart(product))
  }
}
