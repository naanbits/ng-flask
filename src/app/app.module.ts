import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {DashboardModule} from './pages/dashboard-page/dashboard.module';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        DashboardPageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        DashboardModule,
        MaterialModule,
        BrowserAnimationsModule,
        LayoutModule,
        FlexLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
