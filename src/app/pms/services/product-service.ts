import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'http://localhost:1212/api/products';

  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  getAProduct(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl + '/' + productId);
  }

  getProductByCategory(productCategory: String): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + '/category/' + productCategory);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl + '/' + productId);
  }

  addProduct(newProduct: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, newProduct);
  }

  updateProduct(editProduct: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.baseUrl, editProduct);
  }
}
