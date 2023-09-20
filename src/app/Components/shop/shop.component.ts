import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Product } from 'src/app/Shared/Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products: Product[] = [];

  constructor(private shoppingService: UserServiceService , private router:Router) {
    this.products = this.shoppingService.getProducts();
  }

  addToCart(product: Product): void {
    this.shoppingService.addToCart(product);
    this.router.navigate(['/cart'])
  }
 

}
