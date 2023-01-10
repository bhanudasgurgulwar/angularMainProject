import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss'],
})
export class DasboardComponent {
  cartItems!: number;
  constructor(private store: Store<{ cart: { cart: any; totalAmount: any } }>) {
    this.store.select('cart').subscribe((data) => {
      this.cartItems = data.cart.length;
    });
  }
}
