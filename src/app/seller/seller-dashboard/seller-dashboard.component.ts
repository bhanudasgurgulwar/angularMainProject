import { Component } from '@angular/core';
import { GenSerService } from 'src/app/Services/general/gen-ser.service';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import { LocalServiceService } from 'src/app/Services/localstorageServices/local-service.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss'],
})
export class SellerDashboardComponent {
  constructor(
    private http: HttpserviceService,
    private local: LocalServiceService,
    private bSub: GenSerService
  ) {}
  actUser!: any;
  ngOnInit(): void {
    this.bSub.activeUser.subscribe((au: any) => {
      this.actUser = au;
    });
  }

  sendVerfiactionMail() {
    this.http.postData('/auth/send-verification-email', '').subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
}
