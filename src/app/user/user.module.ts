import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpserviceService } from '../Services/HttpServices/httpservice.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompanyDetailsComponent,
    UserdashboardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
