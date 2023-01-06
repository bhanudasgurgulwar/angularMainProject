import { Component,OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  customerOrders:any;
  constructor(private http:HttpserviceService){}
  ngOnInit(): void {
    this.getCustomerOrders();
  }

  getCustomerOrders(){
    this.http.getData('/shop/orders').subscribe({
      next:res=>{
        console.log(res)
        this.customerOrders=res;
        console.log(this.customerOrders)
      },error:err=>console.log(err)
    })
  }

}
