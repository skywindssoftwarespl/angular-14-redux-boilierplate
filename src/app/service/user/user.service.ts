import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //returned dummy observable
  post(): Observable<any> {
    const observable = new Observable((sub) => {
      sub.next('token');
    });
    return observable;
  }
  get = <O>(url: string, params?: any) => this.http.get<O>(url, { params });

  patch = <I, O = I>(url: string, data: I, params?: any) =>
    this.http.patch<O>(url, data, { params });

  delete = <O>(url: string, params?: any, body?: object) =>
    this.http.delete<O>(url, { params, body });
}
