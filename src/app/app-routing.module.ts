import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ServicesComponent } from './Components/services/services.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [{path:'',component:HomeComponent}
,{path:'Products',component:ProductsComponent},
{path:'Services',component:ServicesComponent},
{path:'SignUp',component:SignUpComponent},
{path:'SignIn',component:SignInComponent},
{path:'AboutUs',component:AboutUsComponent},
{path:'Cart',component:CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
