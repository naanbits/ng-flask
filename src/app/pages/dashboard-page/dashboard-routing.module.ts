import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileUserPageComponent } from './profile-user-page/profile-user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import {AddProductPageComponent} from './add-product-page/add-product-page.component';


const routes: Routes = [
  {path: 'profile-user', component: ProfileUserPageComponent,},
  {path: '', component: HomePageComponent},
  {path: 'product', component: ProductPageComponent},
  {path: 'add-product', component: AddProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
