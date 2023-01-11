import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  panelOpenState = false;
  orderId: any;
  orderDetails: any;

  constructor(
    private http: HttpserviceService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any) => {
      this.orderId = param?.id;
    });

    this.getCustomerOrdersDetails();
  }

  getCustomerOrdersDetails() {
    this.http.getData(`/shop/orders/${this.orderId}`).subscribe({
      next: (res: any) => {
        this.orderDetails = res;
      },
      error: (err) => console.log(err),
    });
  }

  cancelOrder() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel Order!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.patchData('/shop/orders/cancel/', this.orderId).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (err) => console.log(err),
        });
        Swal.fire('Order Cncelled!', 'Your order has been cancelled.', 'success');
      }
    });
  }

  proceedToPayment() {
    this.router.navigate([`/user/confirm-payment/${this.orderId}`]);
  }
}
