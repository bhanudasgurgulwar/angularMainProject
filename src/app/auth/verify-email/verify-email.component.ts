import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit{

  constructor(private route:Router ,private http:HttpserviceService ,private actRoute:ActivatedRoute){}



  ngOnInit(): void {

    this.actRoute.queryParams.subscribe(
      params=>{
        console.log(params['token']);
        this.http.postData(`/auth/verify-email?token=${params['token']}`,"").subscribe(
          (res: any) => {
            console.log(res);
            alert("succesfull verifiaction");
            this.route.navigate(['/user'])
          },
          (err) => {
            console.log(err);
            alert('verifictaion denied');
            this.route.navigate(['/user']);
          }
        );
      }
    )

      


  }

}
