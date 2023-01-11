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
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't to empty your cart!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Empty!', 'Your all product has been removed.', 'success');
          this.store.dispatch(clearCart());
        }
      });
  }

  addItemsToBuyNow() {
    this.store.dispatch(addToBuyNow())
  }
}
