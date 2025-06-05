import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order-service';
import { Order } from '../../model/order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-view',
  imports: [CommonModule],
  templateUrl: './order-view.html',
  styleUrl: './order-view.css',
})
export class OrderView {
  fetchedOrder: Order = {
    orderId: 0,
    orderDate: new Date(),
    allProducts: [],
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private changeRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    let extractedOrderId: any =
      this.activatedRoute.snapshot.paramMap.get('orderId');
    this.orderService.getAOrder(extractedOrderId).subscribe({
      next: (response) => {
        console.log(response);
        this.fetchedOrder = response;
        this.changeRef.detectChanges();
      },
    });
  }

  backToOrderList() {
    this.router.navigate(['pms-header/order-header/order-list']);
  }
}
