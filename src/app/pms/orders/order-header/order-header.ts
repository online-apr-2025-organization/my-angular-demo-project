import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-order-header',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './order-header.html',
  styleUrl: './order-header.css',
})
export class OrderHeader {}
