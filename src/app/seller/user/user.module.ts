import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpserviceService } from '../../Services/HttpServices/httpservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    CompanyDetailsComponent,
    UserdashboardComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
