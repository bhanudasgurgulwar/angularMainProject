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
  orderTotalPages!:number;
  orderCurrent!:number;
  orderLimit!:number;
  constructor(private http: HttpserviceService, private router: Router) {}
  ngOnInit(): void {
    this.getCustomerOrders();
  }

  getCustomerOrders() {
    this.http.getData('/shop/orders').subscribe({
      next: (res: any) => {
        console.log(res);
        this.orderTotalPages=res.totalPages;
        this.orderLimit = res.limit;
        this.customerOrders = res.results;
        
      },
      error: (err) => console.log(err),
    });
  }

  orderDetailsPage(id: string) {
    this.router.navigate([`/user/order-details/${id}`]);
  }

  makePayemnet(id: string) {
    this.router.navigate([`/user/confirm-payment/${id}`]);
  }

  getDataByPagination(event:any){
    console.log(event)
    const limit=event.pageSize
    const page=event.pageIndex+1
    console.log(limit,page,event.previousPageIndex)
this.http.getData(`/shop/orders?limit=${limit}&page=${page}`).subscribe({
  next: (res: any) => {
    console.log(res);
    this.orderTotalPages = res.totalPages;
    this.orderLimit = res.limit;
    this.customerOrders = res.results;
  console.log(this.orderTotalPages)
  },
  error: (err) => console.log(err),
});
    
  }
}
