import { Product } from './product.model';

export interface Order {
  orderId: number;
  orderDate: Date;
  allProducts: Product[];
}
