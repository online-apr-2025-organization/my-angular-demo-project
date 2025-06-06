import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';
import { Order } from '../../model/order.model';
import { OrderService } from '../../services/order-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-add',
  imports: [CommonModule],
  templateUrl: './order-add.html',
  styleUrl: './order-add.css',
})
export class OrderAdd {
  allProducts: Product[] = [];
  orderProducts: Product[] = [];
  totalAmount: number = 0;

  constructor(
    private productService: ProductService,
    private changeRef: ChangeDetectorRef,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.allProducts = response;
        this.changeRef.detectChanges();
      },
      error: (err) => console.log(err),
    });
  }

  addToOrder(product: Product) {
    this.orderProducts.push(product);
    this.computeTotalAmount();
  }

  computeTotalAmount() {
    let amt = 0;
    for (let eachProd of this.orderProducts) {
      amt += +eachProd.productCost;
    }
    this.totalAmount = amt;
  }

  removeProduct(prodId: number) {
    for (let i = 0; i < this.orderProducts.length; i++) {
      if (this.orderProducts[i].productId == prodId) {
        this.orderProducts.splice(i, 1);
        break;
      }
    }
    this.computeTotalAmount();
  }

  createOrder() {
    let newOrder: Order = {
      orderId: 0,
      orderDate: new Date(),
      allProducts: this.orderProducts,
    };
    this.orderService.addOrder(newOrder).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['pms-header/order-header/order-list']);
      },
      error: (err) => console.log(err),
    });
  }
}
