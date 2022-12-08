import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import { confrimPasswordValidate } from 'src/app/Shared/password.validator';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent implements OnInit {
  constructor(
    private httpser: HttpserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  users: any;
  //all users array data
  userData: any; //
  //user profile data
  pageNo!: number;
  //to display on which page user is
  totalPages!: number;
  //to know total number of pages

  pageSize: string = ''; //query parameter
  roleChange: string = ''; //query parameter
  sortBy: string = ''; //query parameter
  page: string = ''; //query parameter
  searchName: string = ''; //query parameter


  idToUpdateUser:string=''; // to update user details like user role and all user info 


  ngOnInit(): void {
    this.httpser.getData('/auth/self').subscribe(
      (res) => {
        this.userData = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.getUserResults(this.createQuery());
  }

  createQuery() {
    return `/users?${
      this.pageSize + this.roleChange + this.sortBy + this.page
    }`;
  }

  getUserResults(query: string) {
    this.httpser.getData(query).subscribe(
      (res: any) => {
        console.log(res);
        console.log(res?.results);
        this.users = res?.results;
        this.pageNo = res?.page;
        this.totalPages = res?.totalPages;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateCompanyForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
  });

  updateCompanyInfo() {
    console.log(this.updateCompanyForm.value);
    this.httpser
      .updateData('/users/org', '', this.updateCompanyForm.value)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.httpser.getData('/auth/self').subscribe(
            (res) => {
              this.userData = res;
              console.log(res);
            },
            (err) => {
              console.log(err);
            }
          );
        },
        (err) => {
          console.log(err);
        }
      );
  }

  isLogOut() {
    alert('Logout Sucessfully');
    this.router.navigate(['login']);
    localStorage.removeItem('token');
  }

  deleteUser(_id: string) {
    console.log(_id);
    if (_id === this.userData._id) {
      alert('Cannot delete the boss');
    } else {
      alert('deleted');
    }
  }

  takeIdForUpdate(_id:string){
    this.idToUpdateUser=_id;
  }

  cancelIdAfterUse():void{
    this.idToUpdateUser='';
  }

  updateUserDetails(_id: string) {
    console.log(_id);
  }



  updateUserRole(radio: any) {
    console.log(radio.target.value);
    console.log(this.idToUpdateUser);
  }

  handlePageSize(pageSize: any) {
    this.pageSize = `limit=${pageSize}&`;
    this.getUserResults(this.createQuery());
  }

  handleRoleChange(roleChange: any) {
    console.log(roleChange);
    if (roleChange == '') {
      this.roleChange = ``;
    } else {
      this.roleChange = `role=${roleChange}&`;
    }
    this.getUserResults(this.createQuery());
  }

  handleSortBy(sortBy: any) {
    console.log(sortBy);
    this.sortBy = `sortBy=${sortBy}&`;
    if (sortBy == '') {
      this.sortBy = ``;
    } else {
      this.sortBy = `sortBy=${sortBy}&`;
    }
    this.getUserResults(this.createQuery());
  }

  searchUser(name: string) {
    console.log(name);
    if (name != '') {
      let nameSearch = name;
      this.getUserResults(`/users?name=${nameSearch}`);
    }
  }

  changePage(action: string) {
    if (action == 'next') {
      this.page = `page=${++this.pageNo}`;
    } else {
      this.page = `page=${--this.pageNo}`;
    }
    this.getUserResults(this.createQuery());
  }

  newUser = this.fb.group(
    {
      name: ['', [Validators.required]],
      role: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[0-9])(?=.*[aA-zZ])/),
          Validators.minLength(8),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: confrimPasswordValidate }
  );

  createNewUser(): void {
    console.log(this.newUser.value);
    delete this.newUser.value.confirmPassword;
    this.httpser.postData('/users', this.newUser.value).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
