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
  constructor(
    private http: HttpserviceService,
    private router: Router,
    private bSub: GenSerService
  ) {}

  allProducts!: any;
  totalPages!: number;
  currentPage!: number;

  limit: string = '';
  sortBy: string = '';
  searchName: string = '';
  page: string = '';

  ngOnInit(): void {
    this.getAllProducts(this.createQuery());
  }

  getAllProducts(query: string) {
    this.http.getData(query).subscribe(
      (res: any) => {
        console.log(res);
        this.allProducts = res?.results;
        this.totalPages = res?.totalPages;
        this.currentPage = res?.page;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createQuery(): string {
    return `/products?${this.limit + this.sortBy + this.page}`;
  }

  handleSortBy(sortBy: any) {
    console.log(sortBy);
    this.sortBy = `sortBy=${sortBy}&`;
    if (sortBy == '') {
      this.sortBy = ``;
    } else {
      this.sortBy = `sortBy=${sortBy}&`;
    }
    this.getAllProducts(this.createQuery());
  }

  handleLimit(limit: any) {
    this.limit = `limit=${limit}&`;
    this.getAllProducts(this.createQuery());
  }

  openTheProductInfo(product: any): void {
    console.log(product?._id);
    this.router.navigate([`/seller/products/product-info/${product?._id}`]);
  }

  previousPage() {
    this.page = `page=${this.currentPage - 1}`;
    this.getAllProducts(this.createQuery());
  }

  nextPage() {
    this.page = `page=${this.currentPage + 1}`;
    this.getAllProducts(this.createQuery());
  }
}
