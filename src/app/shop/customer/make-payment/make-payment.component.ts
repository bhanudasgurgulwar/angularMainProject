import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss'],
})
export class MakePaymentComponent implements OnInit {
  orderId!: string;
  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private http: HttpserviceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.actRoute.params.subscribe((params: any) => {
      this.orderId = params?.id;
    });
    console.log(this.orderId);
  }

  payment = this.fb.group({
    nameOnCard: ['', [Validators.required]],
    cardNumber: ['', [Validators.required]],
    expiry: ['', [Validators.required]],
    cvv: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
    ],
  });

  makeOrderPayment() {
    console.log(this.payment.value);
    this.http
      .putData('/shop/orders/confirm/', this.orderId, this.payment.value)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res?.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/user/order-history']);
        },
        error: (err) => console.log(err),
      });
  }
}
