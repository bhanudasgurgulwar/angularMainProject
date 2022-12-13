import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenSerService } from 'src/app/Services/general/gen-ser.service';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private http: HttpserviceService,private router:Router,private bSub:GenSerService) {}

  allProducts!: any;

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.http.getData('/products').subscribe(
      (res: any) => {
        console.log(res);
        this.allProducts = res?.results;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openTheProductInfo(product: any): void {
    
    console.log(product?._id);
    
    this.router.navigate([`/products/product-info/${product?._id}`])

  }

}
