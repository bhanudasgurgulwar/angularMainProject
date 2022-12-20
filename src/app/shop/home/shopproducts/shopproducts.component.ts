import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-shopproducts',
  templateUrl: './shopproducts.component.html',
  styleUrls: ['./shopproducts.component.scss'],
})
export class ShopproductsComponent implements OnInit {
  constructor(private http: HttpserviceService) {}

  allProducts: any;
  images:any;
  totalPages!: number;
  page: string = '';
  limit: string = '';
  sortBy:string='';
  search:string='';
  currentpage!:number;
  totalpages!:number;


  ngOnInit(): void {
    this.getAllProducts(this.createQuery());
  }

  createQuery() :string{
    return "/shop/products"+this.limit+this.sortBy+this.page+this.search;
  }

  getAllProducts(query:string){
      this.http.getData(query).subscribe(
        (res: any) => {
          console.log(res);
          this.allProducts = res.results;
          this.totalPages = res?.totalPages;
          this.currentpage=res?.page;
          this.totalPages=res?.totalPages;
        },
        (err) => {
          console.log(err);
        }
      );
  }



}
