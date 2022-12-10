import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import { HttpserviceService } from './Services/HttpServices/httpservice.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpinterceptorInterceptor } from './Services/HttpServices/httpinterceptor.interceptor';
import { HeaderComponent } from './addOn/header/header.component';
import { FooterComponent } from './addOn/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    UserModule,
    UserRoutingModule,
  ],
  providers: [
    HttpserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
