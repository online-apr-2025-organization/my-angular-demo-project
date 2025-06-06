import { ChangeDetectorRef, Component } from '@angular/core';
import { Order } from '../../model/order.model';
import { OrderService } from '../../services/order-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  imports: [CommonModule],
  templateUrl: './order-list.html',
  styleUrl: './order-list.css',
})
export class OrderList {
  errorMessage: string = '';
  allOrders: Order[] = [];

  constructor(
    private orderService: OrderService,
    private changeRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.errorMessage = '';
    this.orderService.getAllOrders().subscribe({
      next: (response) => {
        console.log(response);
        this.allOrders = response;
        this.changeRef.detectChanges(); // this will manually trigger the change detection
      },
      error: (err) => {
        console.log(err);
        this.errorMessage =
          'OOPS! Something went wrong! Please try again later!';
        this.changeRef.detectChanges();
      },
    });
  }

  viewOrder(oId: number) {
    this.router.navigate(['pms-header/order-header/order-view', oId]);
  }
}
