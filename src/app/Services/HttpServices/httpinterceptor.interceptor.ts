import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpinterceptorInterceptor implements HttpInterceptor {
  constructor() {}
  // headerss = { Authorization: `Bearer ${localStorage.getItem('token')}` };
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('shop/') || request.url.includes('customers')) {
      const req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('ctoken')!
          )}`,
        },
      });
      return next.handle(req);
    } else {
      const req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
        },
      });
      return next.handle(req);
    }
  } 
}
