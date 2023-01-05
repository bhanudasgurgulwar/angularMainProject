import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  buyingProducts: any;
  totalAmount: any;
  selectedAdd: any;
  allAddrress: any;

 

  constructor(
    private store: Store<{ cart: { buyNow: any; totalAmount: any } }>,
    private http: HttpserviceService
  ) {}
  ngOnInit(): void {
    this.store.select('cart').subscribe((data) => {
      this.buyingProducts = data.buyNow;
      this.totalAmount = data.totalAmount;
      console.log(this.buyingProducts);
      this.getAllAddress();
    });
  }

  getAllAddress() {
    this.http.getData('/customers/address').subscribe({
      next: (res) => {
        console.log(res);
        this.allAddrress = res;
        console.log(this.allAddrress);
      },
      error: (err) => console.log(err),
    });
  }

  getAddress(add: any) {
    this.selectedAdd = add.value;
  }

  placeOrder() {
   const orderPayload = {
      items: this.buyingProducts,
      deliveryFee: 0,
      total: this.totalAmount,
      address: this.selectedAdd,
    };
    this.http.postData('/shop/orders', orderPayload).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
}
