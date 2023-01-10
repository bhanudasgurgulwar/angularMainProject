import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import Swal from 'sweetalert2';

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
    private http: HttpserviceService,
    private router: Router
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
      next: (res: any) => {
        console.log(res);
        console.log(res?.order?._id)
        Swal.fire({
          title:
            'Your Order is placed successfully,Do you want to proceed payment?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Proceed Payment',
          denyButtonText: `Pay later`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Proceed to pay', '', 'success');
            this.router.navigate([`user/confirm-payment/${res?.order?._id}`]);
          } else if (result.isDenied) {
            Swal.fire('Payment is remaining', '', 'info');
            this.router.navigate([`user/order-history`]);
          } else {
            Swal.fire('Continue Shopping');
            this.router.navigate(['/shop']);
          }
        });
      },
      error: (err) => console.log(err),
    });
  }
}
