import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

import { AboutComponent } from './Components/about/about.component';

import { ContactComponent } from './Components/contact/contact.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { ShopComponent } from './Components/shop/shop.component';
import { DonateComponent } from './Components/donate/donate.component';
import { CartComponent } from './Components/shop/cart/cart.component';

const routes: Routes = [
  {
    
    path:'', pathMatch:'full' ,redirectTo:'home'
  },
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:ContactComponent,
    path:'contact'
  },
  {
    component:SignUpComponent,
    path:'sign-up'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:ShopComponent,
    path:'shop'
  },
  {
    component:DonateComponent,
    path:'donate'
  }
  ,
  {
    component:CartComponent,
    path:'cart'
  }
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
