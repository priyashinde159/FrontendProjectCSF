import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { User } from '../Shared/User';
import { Cart } from '../Shared/Cart';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = new User();
  prodCount : Number = 0;
  user : User = new User();
  carts : Cart[] | any;

  constructor(public userService :UserServiceService) {}

  get isLoggedIn(): boolean {
    if(this.currentUser.userId === 0 || this.currentUser.userId === null)
      return false;
    else
      return true;
  }

  get productCount() : Number {
    if(this.currentUser.userId != 0)
      {
      this.userService.getCart(this.currentUser.userId).subscribe(
        data => {
                    this.carts = data;
                    console.log(data)
                    this.prodCount = this.carts.length;
                    console.log(this.carts.length)
                }
      )
      }
    return this.prodCount;
  }

  login(user : any): void {
      this.currentUser = user;    
  }

  logout(): void {
    this.currentUser=  { 
      userId: 0,
      userName : '',
      email : '',
      contact :0,
      password : ''};
  }
}
