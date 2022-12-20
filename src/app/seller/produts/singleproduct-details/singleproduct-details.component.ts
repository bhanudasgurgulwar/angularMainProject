import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenSerService } from 'src/app/Services/general/gen-ser.service';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-singleproduct-details',
  templateUrl: './singleproduct-details.component.html',
  styleUrls: ['./singleproduct-details.component.scss'],
})
export class SingleproductDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private http: HttpserviceService,
    private fb: FormBuilder
  ) {}

  productId!: string;
  selectedProductData!: any;
  imageURl!: string;
  toggleEdit: string = '';
  flag: boolean = false;
  imagesArray: any;
  UpdatedimagesArray: any = [];
  delImg_ids: any = [];

  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any) => {
      console.log(param.id);
      this.productId = param?.id;
    });
    this.getSelectedProduct();
  }

  productInfoEdit = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
  });

  toggleEditDiv(edit: string) {
    if (edit === 'edit') {
      this.productInfoEdit.controls['name'].setValue(
        this.selectedProductData?.name
      );
      this.productInfoEdit.controls['description'].setValue(
        this.selectedProductData?.description
      );
      this.productInfoEdit.controls['price'].setValue(
        this.selectedProductData?.price
      );
    }
    this.toggleEdit = edit;
  }

  editProductData() {
    this.http
      .updateData('/products/', this.productId, this.productInfoEdit.value)
      .subscribe(
        (res) => {
          console.log(res);
          this.getSelectedProduct();
        },
        (err) => {
          console.log(err);
        }
      );
    this.toggleEdit = 'e';
  }

  getSelectedProduct() {
    this.http.getData(`/products/${this.productId}`).subscribe(
      (res: any) => {
        console.log(res);
        this.selectedProductData = res;
        this.imageURl = res?.images[0]?.url;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getImageURl(imageURl: string) {
    this.imageURl = imageURl;
  }

  toggleImageEdit() {
    this.imagesArray = [...this.selectedProductData?.images];
    this.flag = !this.flag;
  }

  resetDelImages() {
    this.imagesArray = [...this.selectedProductData?.images];
    this.delImg_ids = [];
  }

  delImage(i: number, id: string) {
    console.log(i);
    console.log(id);
    this.delImg_ids.push(id);
    this.imagesArray.splice(i, 1);
  }

  updateImages(event: any) {
    console.log(event);
    console.log(event?.target?.files);
    console.log(event.target.files.length);
    for (let i = 0; i < event.target.files.length; i++) {
      console.log('first');
      this.UpdatedimagesArray.push(event.target.files[i]);
    }
    console.log(this.UpdatedimagesArray);
  }

  deleteProduct(){
    console.log(this.productId);
  }

  updateImageSubmit() {
    const fd = new FormData();
    this.UpdatedimagesArray.map((val: any) => {
      fd.append('new_images', val);
    });
    this.delImg_ids.map((del_id: any) => {
      fd.append('delete', del_id);
    });

    this.http.updateData('/products/images/', this.productId, fd).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
