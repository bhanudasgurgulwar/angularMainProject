import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  public BaseURl = 'https://shop-api.ngminds.com';

  constructor(private http: HttpClient) {}

  getData(finalUrl: string) {
    return this.http.get(this.BaseURl + finalUrl);
  }

  postData(finalUrl: string, data: any) {
    return this.http.post(this.BaseURl + finalUrl, data);
  }

  updateData(finalUrl: string, id: string | null, data: object) {
    return this.http.patch(`${this.BaseURl + finalUrl}${id}`, data);
  }

  deleteData(finalUrl: string, id: string | null) {
    let newId = '';
    if (id !== '') {
      newId = ':' + id;
    }
    return this.http.delete(`${this.BaseURl + finalUrl}${newId}`);
  }

  putData(finalUrl: string, id: string | null, data: object) {
    return this.http.put(`${this.BaseURl + finalUrl}${id}`, data);
  }

  patchData(finalUrl: string, id: string){
    return this.http.patch(`${this.BaseURl + finalUrl}${id}`,null);
  }
}
