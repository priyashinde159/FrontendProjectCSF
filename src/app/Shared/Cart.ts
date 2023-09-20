import { Product } from "./Product";
import { User } from "./User";

export class Cart{
    product: Product;
    quantity: number;
  
    constructor(product: Product, quantity: number) {
      this.product = product;
      this.quantity = quantity;
    }
}