import { Review } from "./review.model";

export interface Product{
    productId: number;
    productName: string;
    productDescription: string;
    productCost: string;
    productCategory: string;
    productImageUrl: string;
    allReviews: Review[];
}