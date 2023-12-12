import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [

{path:'laptop',component:LaptopComponent},
{path:'cart',component:CartComponent},
{path:'login',component:LoginComponent},
{path:'',component:HomeComponent},
{path:'signup',component:SignupComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
