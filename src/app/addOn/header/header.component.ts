import { Component } from '@angular/core';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import { LocalServiceService } from 'src/app/Services/localstorageServices/local-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private http:HttpserviceService,private local:LocalServiceService){

  }

  sendVerfiactionMail(){
    this.http.postData('/auth/send-verification-email', '').subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
