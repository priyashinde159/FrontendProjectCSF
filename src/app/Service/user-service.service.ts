import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Shared/Product';
import { Cart } from '../Shared/Cart';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  private baseUrl = 'http://localhost:8083/cbf';

  constructor(private http: HttpClient) { }

  createUser(user:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/createUser`,user);
  };

  loginUser(user:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/loginUser`,user)
  }

  addDonar(file : File,donar:Object):Observable<Object>{
    const formData: FormData = new FormData();
    formData.append('file', file);
      formData.append('donar', new Blob([JSON.stringify(donar)],
        {
            type: "application/json"
        }));
    return this.http.post(`${this.baseUrl}/adddonar`,donar);
  };


  
  getCartProducts(userId : number): Observable<Object> {
    return this.http.get(`${this.baseUrl}`+'/getCartByUser/'+ userId);
  }



  private products: Product[] = [
    {
      productId: 1,
      productName: 'Tshirt & Pants',
      price: 67,
      imagePath: 'https://images.meesho.com/images/products/195379233/m9fp1_400.webp',
      category: 'Clothing',
     
    },
    {
      productId: 2,
      productName: 'Pyjamas',
      price: 150,
      imagePath: 'https://images.meesho.com/images/products/323667075/tro6z_400.webp',
      category: 'Clothing',
    },
    // Add more products as needed
  ];
  private cart: Cart[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  getCartItems(): Cart[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    const cartItem = this.cart.find((item) => item.product.productId === product.productId);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeFromCart(cartItem: Cart): void {
    const index = this.cart.findIndex(
      (item) => item.product.productId === cartItem.product.productId
    );

    if (index !== -1) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }

  clearCart(): void {
    this.cart = [];
  }
  
  
}
