import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', component: DashboardPageComponent,
      canActivate: [AuthGuard],
      loadChildren: () => import('./pages/dashboard-page/dashboard.module').then(e=>e.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
