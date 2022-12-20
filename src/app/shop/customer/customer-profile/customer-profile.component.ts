import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
})
export class CustomerProfileComponent implements OnInit {
  constructor(private http: HttpserviceService) {}

  customerProfile: any;

  ngOnInit(): void {
      this.getCustomerProfile ();
  }

  getCustomerProfile() {
    this.http.getData('/shop/auth/self').subscribe(
      (res:any) => {
        console.log(res)
        this.customerProfile=res;
      },
      (err) => console.log(err)
    );
  }
}
