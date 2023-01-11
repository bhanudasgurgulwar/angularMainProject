import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/cart-Store/cart.action';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-shopproducts',
  templateUrl: './shopproducts.component.html',
  styleUrls: ['./shopproducts.component.scss'],
})
export class ShopproductsComponent implements OnInit {
  cartProducts: any;
  constructor(
    private http: HttpserviceService,
    private store: Store<{ cart: { cart: any } }>
  ) {
    this.store.select('cart').subscribe((data) => {
      this.cartProducts = data.cart;
    });
  }

  allProducts: any;
  images: any;
  totalPages!: number;
  page: string = '';
  limit: string = '';
  sortBy: string = '';
  search: string = '';
  currentpage!: number;
  totalpages!: number;

  ngOnInit(): void {
    this.getAllProducts(this.createQuery());
  }

  createQuery(): string {
    return (
      '/shop/products?' + this.limit + this.sortBy + this.page + this.search
    );
  }

  getAllProducts(query: string) {
    this.http.getData(query).subscribe({
      next: (res: any) => {
        this.allProducts = res.results;
        this.totalPages = res?.totalPages;
        this.currentpage = res?.page;
        this.totalPages = res?.totalPages;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleSortBy(sortBy: any) {
    console.log(sortBy);
    if (sortBy === '') this.sortBy = '';
    else {
      this.sortBy = `&sortBy=${sortBy}`;
      this.getAllProducts(this.createQuery());
    }
  }

  handleLimit(limit: any) {
    console.log(limit);
    this.limit = `&limit=${limit}`;
    this.getAllProducts(this.createQuery());
  }

  handlePrev() {
    this.currentpage--;
    this.page = `&page=${this.currentpage}`;
    this.getAllProducts(this.createQuery());
  }

  handleNext() {
    this.currentpage++;
    this.page = `&page=${this.currentpage}`;
    this.getAllProducts(this.createQuery());
  }

  addToCart(product: any) {
    this.store.dispatch(addToCart({ product: product }));
  }

  toogleAddtoCartButton(productId: string) {
    let found = this.cartProducts.find((i: any) => i._id === productId);
    if (found) return false;
    else return true;
  }
}
