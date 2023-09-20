import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { LoginComponent } from './Components/login/login.component';

import { ContactComponent } from './Components/contact/contact.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ShopComponent } from './Components/shop/shop.component';
import { DonateComponent } from './Components/donate/donate.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './Components/shop/cart/cart.component'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
         AboutComponent,
         LoginComponent,
        
         ContactComponent,
         NavbarComponent,
         SignUpComponent,
         ShopComponent,
         DonateComponent,
         CartComponent,
         
         
  ],
  
  imports: [
    BrowserModule,FormsModule,
    
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
