import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ServicesComponent } from './Components/services/services.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CartComponent } from './Components/cart/cart.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CategoryComponent } from './Components/category/category.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { AuthorizationService } from './ServiceM/authorization.service';
import { UserServiceService } from './ServiceM/user-service.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    SignUpComponent,
    CartComponent,
    SignInComponent,
    AboutUsComponent,
    CategoryComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    UserServiceService,
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
