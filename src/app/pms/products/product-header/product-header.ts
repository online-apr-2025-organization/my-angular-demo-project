import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-header',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './product-header.html',
  styleUrl: './product-header.css',
})
export class ProductHeader {}
