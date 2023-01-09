import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  customerOrders: any;
  constructor(private http: HttpserviceService, private router: Router) {}
  ngOnInit(): void {
    this.getCustomerOrders();
  }

  getCustomerOrders() {
    this.http.getData('/shop/orders').subscribe({
      next: (res: any) => {
        console.log(res);
        this.customerOrders = res.results;
        console.log(this.customerOrders);
      },
      error: (err) => console.log(err),
    });
  }

  orderDetailsPage(id: string) {
    this.router.navigate([`/customer/order-details/${id}`]);
  }
}
