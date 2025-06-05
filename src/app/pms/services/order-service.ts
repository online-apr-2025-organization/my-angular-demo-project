import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl: string = 'http://localhost:1212/api/orders';

  constructor(private httpClient: HttpClient) {}

  getAllOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl);
  }

  getAOrder(orderId: number | null): Observable<Order> {
    return this.httpClient.get<Order>(this.baseUrl + '/' + orderId);
  }

  deleteOrder(orderId: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl + '/' + orderId);
  }

  addOrder(newOrder: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.baseUrl, newOrder);
  }

  updateOrder(editOrder: Order): Observable<Order> {
    return this.httpClient.put<Order>(this.baseUrl, editOrder);
  }
}
