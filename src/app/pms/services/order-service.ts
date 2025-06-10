import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl: string = 'http://localhost:1212/api/orders';
  header: HttpHeaders;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    console.log('token:', authService.retrieveToken);
    this.header = new HttpHeaders({
      Authorization: 'Bearer ' + authService.retrieveToken(),
    });
  }

  getAllOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl, { headers: this.header });
  }

  getAOrder(orderId: number | null): Observable<Order> {
    return this.httpClient.get<Order>(this.baseUrl + '/' + orderId, {
      headers: this.header,
    });
  }

  deleteOrder(orderId: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl + '/' + orderId, {
      headers: this.header,
    });
  }

  addOrder(newOrder: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.baseUrl, newOrder, {
      headers: this.header,
    });
  }

  updateOrder(editOrder: Order): Observable<Order> {
    return this.httpClient.put<Order>(this.baseUrl, editOrder, {
      headers: this.header,
    });
  }
}
