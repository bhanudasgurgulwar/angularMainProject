import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import { LocalServiceService } from 'src/app/Services/localstorageServices/local-service.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
})
export class CustomerProfileComponent implements OnInit {
  constructor(
    private http: HttpserviceService,
    private fb: FormBuilder,
    private local: LocalServiceService,
    private router: Router
  ) {}

  customerProfile: any;
  profileEdit = false;
  customerAddress: any;
  addressUpdateFlag = false;
  idToEditChanges!: string;
  profilePicture: any;
  customerOrders:any;

  updateProfile = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
  });

  addressUpdates = this.fb.group({
    street: ['', [Validators.required]],
    addressLine2: ['', Validators.required],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    pin: [
      '',
      [Validators.required, Validators.maxLength(6), Validators.minLength(6)],
    ],
  });

  ngOnInit(): void {
    this.getCustomerProfile();
    this.getCustomerAddress();
    this.getCustomerOrders();
  }

  getCustomerProfile() {
    this.http.getData('/shop/auth/self').subscribe(
      (res: any) => {
        console.log(res);
        this.customerProfile = res;
      },
      (err) => console.log(err)
    );
  }

  getCustomerOrders(){
    this.http.getData('/shop/orders').subscribe({
      next:res=>{
        console.log(res)
        this.customerOrders=res;
      },error:err=>console.log(err)
    })
  }

  getCustomerAddress() {
    this.http.getData('/customers/address').subscribe(
      (res: any) => {
        console.log(res);
        this.customerAddress = res;
      },
      (err) => console.log(err)
    );
  }

  addNewAddress() {
    console.log(this.addressUpdates.value);
    this.http
      .postData('/customers/address', this.addressUpdates.value)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.getCustomerAddress();
        },
        (err) => console.log(err)
      );
  }

  updateCustomerAddress() {
    console.log(this.addressUpdates.value);
    this.http
      .putData(
        '/customers/address/',
        this.idToEditChanges,
        this.addressUpdates.value
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.getCustomerAddress();
        },
        (err) => console.log(err)
      );
  }

  deleteCustomerAddress(id: string) {
    this.http.deleteData('/customers/address/', id).subscribe({
      next: (res: any) => {
        alert('delete address');
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }

  CustomerLogout() {
    this.local.removeLoacal('ctoken');
    this.router.navigate(['']);
  }

  toggleAddressUpdateFlag(flag: boolean, add: any) {
    this.addressUpdateFlag = flag;
    this.idToEditChanges = add?._id;
    if (!flag) {
      this.addressUpdates.setValue({
        street: add?.street,
        addressLine2: add?.addressLine2,
        city: add?.city,
        state: add?.state,
        pin: add?.pin,
      });
    } else {
      this.addressUpdates.reset();
    }
  }

  toggleEdit(flag: boolean) {
    this.updateProfile.controls['email'].setValue(this.customerProfile?.email);
    this.updateProfile.controls['name'].setValue(this.customerProfile?.name);

    this.profileEdit = flag;
  }

  updateProfileDetails() {
    this.http
      .updateData('/customers/update-profile', '', this.updateProfile.value)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.getCustomerProfile();
          this.profileEdit = false;
        },
        (err) => console.log(err)
      );
  }

  getImage(event: any) {
    console.log(event.target.files[0]);
    this.profilePicture = event.target.files[0];
  }

  updateProfilePicture(file: any) {
    let fb = new FormData();
    fb.append('picture', this.profilePicture);
    this.http.postData('/customers/profile-picture', fb).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getCustomerProfile();
      },
      error: (err) => console.log(err),
    });
  }

  deleteProfilePicture() {
    this.http.deleteData('/customers/profile-picture', '').subscribe({
      next: (res: any) => {
        console.log(res);
        this.getCustomerProfile();
      },
      error: (err) => console.log(err),
    });
  }



}
