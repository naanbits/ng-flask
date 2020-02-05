import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileUserPageComponent } from './profile-user-page/profile-user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialModule } from 'src/app/material.module';
import { ProductPageComponent } from './product-page/product-page.component';


const components =[
  ProfileUserPageComponent,HomePageComponent
];

const modules = [
  DashboardRoutingModule
]

@NgModule({
  declarations: [ProfileUserPageComponent, HomePageComponent, ProductPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  exports:[
    ...components,...modules
  ]
})
export class DashboardModule { }
