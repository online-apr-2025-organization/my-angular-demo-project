import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../model/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  baseUrl: string = 'http://localhost:1212/api/reviews';

  constructor(private httpClient: HttpClient) {}

  getAllReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.baseUrl);
  }

  getAReview(reviewId: number): Observable<Review> {
    return this.httpClient.get<Review>(this.baseUrl + '/' + reviewId);
  }

  deleteReview(reviewId: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl + '/' + reviewId);
  }

  addReview(newReview: Review): Observable<Review> {
    return this.httpClient.post<Review>(this.baseUrl, newReview);
  }

  updateReview(editReview: Review): Observable<Review> {
    return this.httpClient.put<Review>(this.baseUrl, editReview);
  }
}
