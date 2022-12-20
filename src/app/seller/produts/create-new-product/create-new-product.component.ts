import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.scss'],
})
export class CreateNewProductComponent {
  constructor(private fb: FormBuilder, private http: HttpserviceService) {}

  formData1 = new FormData();
  imagesArray: any = [];

  createProduct = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    images: ['', [Validators.required]],
  });

  addImages(event: any) {
    console.log(event);
    console.log(event?.target?.files);
    console.log(event.target.files.length);
    for (let i = 0; i < event.target.files.length; i++) {
      console.log('first');
      this.imagesArray.push(event.target.files[i]);
    }
    console.log(this.imagesArray);
  }

  createNewProduct() {
    console.log(this.createProduct.value);
    this.formData1.append('name', `${this.createProduct.value.name}`);
    this.formData1.append(
      'description',
      `${this.createProduct.value.description}`
    );
    this.formData1.append('price', `${this.createProduct.value.price}`);
    for (let i = 0; i < this.imagesArray.length; i++) {
      this.formData1.append('images', this.imagesArray[i]);
    }

    this.http.postData('/products', this.formData1).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
