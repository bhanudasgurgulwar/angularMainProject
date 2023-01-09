import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss'],
})
export class MakePaymentComponent implements OnInit {
  orderId!:string;
  constructor(private fb: FormBuilder,private actRoute:ActivatedRoute) {}
  ngOnInit(): void {
    this.actRoute.params.subscribe((params:any)=>{
      this.orderId=params?.id;

    })
    console.log(this.orderId)
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


  makeOrderPayment(){
    console.log(this.payment.value)
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
